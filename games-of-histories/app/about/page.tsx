'use client';

import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-stone-50">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-serif text-center mb-12 text-amber-900">About Imperium</h1>
              
              {/* About the Game Section */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="bg-amber-50 p-3 rounded-lg mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-8 h-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-serif text-amber-900">About the Game</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-stone-600 mb-4">
                      Imperium is a strategic board game that transports players to the height of the Roman Empire. 
                      As a Roman general, you'll command legions, manage resources, and make crucial decisions that 
                      will shape the destiny of your empire.
                    </p>
                    <p className="text-stone-600">
                      The game combines elements of strategy, resource management, and historical events to create 
                      an immersive experience that both casual and hardcore gamers will enjoy.
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-600 mb-4">
                      Players take on different roles within the Roman government, from Consul to Assembly Member, 
                      each with unique abilities and objectives. The game's mechanics are designed to reflect the 
                      political intrigue and military challenges of ancient Rome.
                    </p>
                    <p className="text-stone-600">
                      With multiple paths to victory and dynamic player interactions, every game of Imperium offers 
                      a unique experience that will keep players coming back for more.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* About the Creators Section */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="bg-amber-50 p-3 rounded-lg mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-8 h-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-serif text-amber-900">About the Creators</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-stone-600 mb-4">
                      Our team of passionate game designers and historians came together with a shared vision: 
                      to create a board game that captures the essence of ancient Rome while providing engaging 
                      and strategic gameplay.
                    </p>
                    <p className="text-stone-600">
                      With backgrounds in game design, classical history, and visual arts, we've spent years 
                      perfecting Imperium to ensure it's both historically accurate and incredibly fun to play.
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-600 mb-4">
                      Each member of our team brings unique expertise to the project, from historical research 
                      to game mechanics design. We've worked with historians and archaeologists to ensure the 
                      game's authenticity.
                    </p>
                    <p className="text-stone-600">
                      Our goal is to create games that not only entertain but also educate, sparking interest 
                      in ancient history while providing hours of strategic gameplay.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Inspiration Section */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="bg-amber-50 p-3 rounded-lg mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-8 h-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-serif text-amber-900">Inspiration Behind the Game</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-stone-600 mb-4">
                      The inspiration for Imperium came from our fascination with the complex political and 
                      military systems of ancient Rome. We wanted to create a game that captures the strategic 
                      depth of Roman governance while remaining accessible and engaging.
                    </p>
                    <p className="text-stone-600">
                      The game's mechanics are inspired by historical events and political structures, from 
                      the Senate's decision-making processes to the military campaigns that shaped the empire.
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-600 mb-4">
                      We drew inspiration from classical texts, archaeological findings, and modern historical 
                      research to create a game that feels authentic to the period while providing modern 
                      strategic gameplay.
                    </p>
                    <p className="text-stone-600">
                      The balance between military might, political influence, and resource management reflects 
                      the real challenges faced by Roman leaders, making Imperium both historically accurate 
                      and strategically compelling.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
} 