import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, Terminal, Cpu } from 'lucide-react';

const FloatingLaptop = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Main laptop/monitor */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotateY: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg border border-gray-600 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg p-2 relative overflow-hidden">
            {/* Code lines animation */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="space-y-1"
            >
              <div className="h-1 bg-blue-400 rounded w-3/4"></div>
              <div className="h-1 bg-green-400 rounded w-1/2"></div>
              <div className="h-1 bg-purple-400 rounded w-2/3"></div>
              <div className="h-1 bg-yellow-400 rounded w-1/3"></div>
            </motion.div>
            
            {/* Cursor blink */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute bottom-2 left-2 w-1 h-2 bg-white"
            />
          </div>
        </div>
        
        {/* Laptop base */}
        <div className="w-36 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-b-lg -mt-1"></div>
      </motion.div>

      {/* Floating icons around laptop */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      >
        {/* Code icon */}
        <motion.div
          className="absolute top-8 right-8"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
        >
          <Code className="w-6 h-6 text-blue-400/60" />
        </motion.div>

        {/* Terminal icon */}
        <motion.div
          className="absolute bottom-8 left-8"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        >
          <Terminal className="w-6 h-6 text-green-400/60" />
        </motion.div>

        {/* CPU icon */}
        <motion.div
          className="absolute top-8 left-8"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2
          }}
        >
          <Cpu className="w-6 h-6 text-purple-400/60" />
        </motion.div>

        {/* Monitor icon */}
        <motion.div
          className="absolute bottom-8 right-8"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          <Monitor className="w-6 h-6 text-yellow-400/60" />
        </motion.div>
      </motion.div>

      {/* Glowing particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${30 + (i * 8)}%`,
            top: `${40 + (i % 2) * 20}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLaptop;

