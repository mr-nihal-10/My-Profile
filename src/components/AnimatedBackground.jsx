import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  const codeSnippets = [
    'const', 'function', 'return', 'import', 'export', 'async', 'await',
    '{}', '[]', '()', '=>', '&&', '||', '===', '!==', '++', '--',
    'React', 'useState', 'useEffect', 'props', 'state', 'render',
    'API', 'JSON', 'HTTP', 'CSS', 'HTML', 'JS', 'TS', 'JSX'
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
          size: 0.6 + Math.random() * 0.8
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-blue-400/10 font-mono font-bold select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}rem`
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, -10, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {particle.text}
        </motion.div>
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8 + (i * 2),
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-4 h-4 ${i % 3 === 0 ? 'bg-blue-500/10' : i % 3 === 1 ? 'bg-purple-500/10' : 'bg-green-500/10'} ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;

