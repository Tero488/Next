
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageOff } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, Variants, useMotionValue, animate } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// --- Animation Primitives ---

export const Reveal: React.FC<{ children: React.ReactNode; width?: "fit-content" | "100%"; delay?: number }> = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0, 1] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delayChildren?: number }> = ({ children, className, delayChildren = 0.2 }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      variants={itemVariants} 
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Safe Image Component ---
export const SafeImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Reset error state if src changes
  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [src]);

  if (error) {
    return (
      <div className={`bg-slate-200 flex flex-col items-center justify-center text-slate-400 p-4 ${className}`}>
        <ImageOff size={24} className="mb-2 opacity-50" />
        <span className="text-xs text-center font-medium opacity-75 truncate w-full">{alt || 'Image Unavailable'}</span>
      </div>
    );
  }

  return (
    <>
      {!loaded && <div className={`absolute inset-0 bg-slate-200 animate-pulse ${className}`} />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </>
  );
};

export const ParallaxImage: React.FC<{ src: string; alt: string; className?: string; heightClass?: string }> = ({ src, alt, className, heightClass = "h-full" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${heightClass} ${className}`}>
      <motion.div 
        style={{ y, willChange: "transform" }}
        className="w-full h-[120%] -mt-[10%] relative"
      >
        <SafeImage 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
        />
      </motion.div>
    </div>
  );
};

export const CountUp: React.FC<{ to: number; suffix?: string; className?: string }> = ({ to, suffix = '', className }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

// --- UI Components ---

export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <Reveal width="100%">
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">{subtitle}</span>}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{title}</h2>
      <motion.div 
        initial={{ scaleX: 0, originX: centered ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1.5 w-24 bg-accent mt-6 ${centered ? 'mx-auto' : ''}`}
      ></motion.div>
    </div>
  </Reveal>
);

export const Button: React.FC<{ children: React.ReactNode; to?: string; variant?: 'primary' | 'outline' }> = ({ children, to, variant = 'primary' }) => {
  const baseClass = "inline-flex items-center justify-center px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 relative overflow-hidden group";
  const styles = variant === 'primary' 
    ? "bg-slate-900 text-white" 
    : "border-2 border-slate-900 text-slate-900";

  const content = (
    <>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{children}</span>
      <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${styles}`}>
        {content}
      </Link>
    );
  }
  return (
    <button className={`${baseClass} ${styles}`}>
      {content}
    </button>
  );
};

export const CaseCard: React.FC<{ id: string; image: string; title: string; category: string }> = ({ id, image, title, category }) => (
  <StaggerItem className="group cursor-pointer block h-full">
    <Link to={`/cases/${id}`} className="block h-full">
      <div className="relative overflow-hidden aspect-[4/3] mb-5 shadow-md group-hover:shadow-xl transition-all duration-500 bg-slate-200">
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 z-10 transition-colors duration-500" />
        <SafeImage 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 transform-gpu" 
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-accent uppercase tracking-wider font-bold mb-2 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">{category}</span>
        <h3 className="text-2xl font-serif font-medium text-slate-900 group-hover:text-accent transition-colors duration-300">{title}</h3>
      </div>
    </Link>
  </StaggerItem>
);

export const ProductCard: React.FC<{ id: string; image: string; title: string; description: string }> = ({ id, image, title, description }) => {
  const { t } = useLanguage();
  return (
    <StaggerItem className="bg-slate-50 p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer hover:-translate-y-2 h-full flex flex-col">
      <div className="h-56 mb-8 overflow-hidden bg-slate-200 relative group-hover:shadow-inner">
        <SafeImage 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 transform-gpu" 
        />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-base mb-6 flex-grow leading-relaxed">{description}</p>
      <Link to={`/nexthome/space-magic/${id}`} className="text-accent text-base font-medium flex items-center hover:underline mt-auto group">
        {t('ui.details')} <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </StaggerItem>
  );
};
