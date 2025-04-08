'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-stone-900/90 flex items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-amber-800/30 border-t-amber-800 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute mt-24 text-amber-800 font-serif text-xl"
      >
        GLORIA ROMAE
      </motion.div>
    </div>
  );
} 