import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, ChevronRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { useLanguage } from '../context/LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const dragControls = useDragControls();

  // Initialize the Chat Session
  useEffect(() => {
    const initChat = () => {
      try {
        // IMPORTANT: apiKey is sourced from process.env.API_KEY as per guidelines
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Define System Instruction for the AI persona
        const systemInstruction = `
          You are the intelligent AI assistant for NEXT+, a world-class provider of spatial solutions and modular architecture.
          
          Your knowledge base covers:
          1. **NEXT+ HOME**: Our core integrated solution for spatial design, construction, and delivery.
          2. **Space Magic**: Our proprietary modular product line including wall systems, smart lighting, and eco-stone flooring.
          3. **Ideal You**: A platform connecting users with top-tier designers and case inspiration.
          4. **NEXT+ MEALTIME**: A corporate dining service platform connecting brands and spaces.

          **Tone Guidelines**:
          - Professional, sophisticated, yet approachable.
          - Concise and helpful.
          - Emphasize innovation, sustainability, and design aesthetics.

          **Language Rule**:
          - If the user inputs Chinese, reply in Chinese.
          - If the user inputs English, reply in English.
          - If the user context implies a specific language, adapt accordingly.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          }
        });
      } catch (error) {
        console.error("Failed to initialize Gemini Chat:", error);
      }
    };

    if (!chatSessionRef.current) {
      initChat();
    }
  }, []);

  // Add welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: t('chat.welcome') }]);
    }
  }, [isOpen, t, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatSessionRef.current) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMessage });
      
      // Add a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: "" }]);
      
      let fullText = "";
      for await (const chunk of result) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
            fullText += chunkText;
            setMessages(prev => {
                const newMessages = [...prev];
                const lastMsg = newMessages[newMessages.length - 1];
                if (lastMsg.role === 'model') {
                    lastMsg.text = fullText;
                }
                return newMessages;
            });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: t('chat.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Side Navigation Bar (Capsule) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-4 p-2.5 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        {/* Chat Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isOpen ? 'bg-accent text-white shadow-accent/40' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        </motion.button>

        {/* Divider */}
        <div className="w-6 h-px bg-white/10"></div>

        {/* Back to Top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragListener={false}
            dragControls={dragControls}
            dragMomentum={false}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 -translate-y-1/2 right-24 z-[110] w-[340px] h-[480px] max-h-[70vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header - Draggable Area */}
            <div 
              onPointerDown={(e) => dragControls.start(e)}
              className="bg-slate-900 p-4 flex items-center justify-between cursor-move select-none active:cursor-grabbing"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">{t('chat.title')}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-slate-400 text-xs font-medium">ONLINE AI</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500" />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-slate-900 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-accent" />
                    <span className="text-xs text-slate-400 font-medium">{t('ui.loading')}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('chat.placeholder')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-4 pr-12 text-sm text-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-slate-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`absolute right-1.5 top-1.5 p-1.5 rounded-full transition-colors ${
                    input.trim() ? 'bg-slate-900 text-white hover:bg-accent shadow-sm' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={16} className={input.trim() ? "ml-0.5" : ""} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
