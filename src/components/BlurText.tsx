import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delayOffset?: number; // base delay offset
}

export default function BlurText({ text, className = '', delayOffset = 0 }: BlurTextProps) {
  // Split the text by spaces to get words
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delayOffset,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden mr-[0.25em] py-1">
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
