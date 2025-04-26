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
            src="/media/images/final map.png"
            alt="Roman Map"
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
              onClick={() => {
                const featuresSection = document.getElementById('latest-features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-serif px-8 py-3 rounded-lg transition-colors duration-200"
            >
              See Latest Features
            </motion.button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-serif text-center mb-12 text-amber-900">About Imperium</h1>
              
              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div 
                  className="bg-white rounded-lg shadow-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4 text-amber-800">⚔️</div>
                  <h3 className="text-xl font-serif text-amber-900 mb-3">Strategic Depth</h3>
                  <p className="text-stone-600">
                    Command legions, manage resources, and make crucial decisions that will shape your empire's destiny.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-lg shadow-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4 text-amber-800">🏛️</div>
                  <h3 className="text-xl font-serif text-amber-900 mb-3">Historical Immersion</h3>
                  <p className="text-stone-600">
                    Experience authentic Roman history through carefully researched events, characters, and locations.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-lg shadow-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4 text-amber-800">🎲</div>
                  <h3 className="text-xl font-serif text-amber-900 mb-3">Dynamic Gameplay</h3>
                  <p className="text-stone-600">
                    Every game offers unique challenges and opportunities, ensuring endless replayability.
                  </p>
                </motion.div>
              </div>

              {/* Game Overview */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 text-amber-800">🏺</div>
                  <h2 className="text-2xl font-serif text-amber-900">The Game</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-stone-600 mb-4">
                      Imperium is a strategic board game that transports you to the height of the Roman Empire. 
                      As a Roman general, you'll command legions, manage resources, and make crucial decisions 
                      that will shape the destiny of your empire.
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

              {/* Latest Features Section */}
              <motion.div 
                id="latest-features"
                className="bg-white rounded-lg shadow-lg p-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 text-amber-800">✨</div>
                  <h2 className="text-2xl font-serif text-amber-900">Latest Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">🎲</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-3">Gameplay Rules</h3>
                    <p className="text-stone-600 mb-4">
                      Comprehensive gameplay rules now available, detailing everything from basic mechanics to advanced strategies.
                    </p>
                    <a 
                      href="/gameplay-rules?section=game-rules"
                      className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-serif px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      View Rules
                    </a>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">📚</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-3">Historical Context</h3>
                    <p className="text-stone-600 mb-4">
                      Explore the rich historical background of ancient Rome, including government, military, society, and special event cards.
                    </p>
                    <a 
                      href="/history"
                      className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-serif px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      View History
                    </a>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">🎨</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-3">Visual Assets</h3>
                    <p className="text-stone-600">
                      New visual assets including the Roman map and other game components have been added to enhance the gaming experience.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">🃏</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-3">New Cards Added</h3>
                    <p className="text-stone-600 mb-4">
                      Exciting new cards have been introduced, adding fresh strategies and gameplay elements to enhance your gaming experience.
                    </p>
                    <a 
                      href="/gameplay-rules?section=additional-elements"
                      className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-serif px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      View New Cards
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Development Timeline */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 text-amber-800">📜</div>
                  <h2 className="text-2xl font-serif text-amber-900">Our Journey</h2>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4">
                      <div className="text-amber-800">1</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-amber-900 mb-2">Concept Development</h3>
                      <p className="text-stone-600">
                        Our team of passionate game designers came together with a shared vision: 
                        to create a board game that captures the essence of ancient Rome while providing engaging 
                        and strategic gameplay.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4">
                      <div className="text-amber-800">2</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-amber-900 mb-2">Historical Research</h3>
                      <p className="text-stone-600">
                        We went for "Games of Histories" classes on Thursday mornings to ensure the game's authenticity, drawing 
                        inspiration from classical texts, and modern historical research.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 rounded-full p-3 mr-4">
                      <div className="text-amber-800">3</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-amber-900 mb-2">Game Design</h3>
                      <p className="text-stone-600">
                        Weeks of playtesting and refinement went into perfecting Imperium's mechanics, ensuring 
                        a balance between historical accuracy and engaging gameplay.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Team Section */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 text-amber-800">👥</div>
                  <h2 className="text-2xl font-serif text-amber-900">Our Team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">🎨</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-2">Game Design</h3>
                    <p className="text-stone-600 mb-4">
                      Our game designer Samuel bring years of experience in creating engaging and balanced gameplay mechanics.
                    </p>
                    <ul className="text-stone-600 space-y-2">
                      <li>• Lead Game Designer</li>
                      <li>• Mechanics Specialist</li>
                      <li>• Playtesting Coordinator</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">📚</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-2">Historical Research</h3>
                    <p className="text-stone-600 mb-4">
                      Our "historian" Ainsley ensure the game's authenticity and educational value through meticulous research.
                    </p>
                    <ul className="text-stone-600 space-y-2">
                      <li>• Classical Historian</li>
                      <li>• Archaeological Consultant</li>
                      <li>• Cultural Expert</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-stone-50 rounded-lg p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-4 text-amber-800">🎭</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-2">Art & Design</h3>
                    <p className="text-stone-600 mb-4">
                      Our in house speialised artiste and designer Ametis brings the world of ancient Rome to life through stunning visuals.
                    </p>
                    <ul className="text-stone-600 space-y-2">
                      <li>• Lead Artist</li>
                      <li>• Graphic Designer</li>
                      <li>• 3D Modeler</li>
                    </ul>
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-stone-600">
                    Together, our diverse team combines expertise in game design, history, and visual arts to create 
                    an immersive and authentic experience that brings ancient Rome to your tabletop.
                  </p>
                </div>
              </motion.div>
            </motion.div>
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