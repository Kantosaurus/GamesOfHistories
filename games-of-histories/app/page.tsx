'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-stone-900/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop"
            alt="Roman Colosseum"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6"
            >
              IMPERIVM
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Command your legions, build your empire, and shape the destiny of Rome
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors"
              onClick={() => window.location.href = '/pre-order'}
            >
              Pre-order Now
            </motion.button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-center mb-12">Experience Ancient Rome</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-serif mb-4">Strategic Gameplay</h3>
                <p className="text-stone-600">Command legions, manage resources, and make crucial decisions that will shape your empire's future.</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-serif mb-4">Historical Accuracy</h3>
                <p className="text-stone-600">Immerse yourself in authentic Roman history, with carefully researched events and characters.</p>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-serif mb-4">Beautiful Design</h3>
                <p className="text-stone-600">Stunning artwork and high-quality components bring the glory of Rome to your tabletop.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
} 