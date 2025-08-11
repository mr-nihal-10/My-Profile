import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeEditor = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const codeLines = [
    { text: "const developer = {", color: "text-purple-400" },
    { text: "  name: 'Nihalahamad Havadar',", color: "text-green-400" },
    { text: "  skills: [", color: "text-blue-400" },
    { text: "    'React', 'Node.js',", color: "text-yellow-400" },
    { text: "    'MySQL', 'MongoDB'", color: "text-yellow-400" },
    { text: "  ],", color: "text-blue-400" },
    { text: "  passion: 'Creating Impactful Solutions',", color: "text-green-400" },
    { text: "  available: true", color: "text-orange-400" },
    { text: "};", color: "text-purple-400" },
    { text: "", color: "text-white" },
    { text: "export default developer;", color: "text-pink-400" }
  ];

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      if (currentLineIndex < codeLines.length) {
        setDisplayedCode(prev => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      } else {
        setIsTyping(false);
        // Reset after a pause
        setTimeout(() => {
          setDisplayedCode([]);
          setCurrentLineIndex(0);
          setIsTyping(true);
        }, 3000);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentLineIndex, isTyping]);

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Editor Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">developer.js</div>
          <div className="w-12"></div>
        </div>

        {/* Editor Content */}
        <div className="p-4 font-mono text-sm bg-gray-900 min-h-[300px]">
          <AnimatePresence>
            {displayedCode.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center mb-1"
              >
                <span className="text-gray-500 mr-4 select-none w-6 text-right">
                  {index + 1}
                </span>
                <span className={line.color}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Cursor */}
          {isTyping && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="flex items-center"
            >
              <span className="text-gray-500 mr-4 select-none w-6 text-right">
                {displayedCode.length + 1}
              </span>
              <div className="w-2 h-5 bg-blue-400"></div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Floating syntax elements */}
      <div className="relative">
        {['{', '}', '(', ')', '[', ']', '=>', '==='].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-blue-400/20 font-mono text-lg pointer-events-none"
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${-20 + (index % 3) * 15}px`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3 + (index * 0.5),
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeEditor;

