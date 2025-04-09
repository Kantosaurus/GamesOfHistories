'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const gameComponents = [
  {
    id: 'cards',
    category: 'Cards',
    items: [
      'Spy cards',
      'Consul Disapprove Card',
      'Senate Disapprove Card',
      'Assembly member convene cards',
      'Event Cards',
      'Gift from gods cards'
    ],
    description: 'Various cards that represent player roles, special actions, and game events. Each card type serves a unique purpose in the game mechanics.'
  },
  {
    id: 'tokens',
    category: 'Tokens',
    items: [
      'Money Tokens',
      'Army Tokens',
      'Temple Tokens',
      'Player tokens'
    ],
    description: 'Physical tokens used to track resources, military strength, and player positions. Essential for managing game state and player interactions.'
  },
  {
    id: 'board',
    category: 'Game Board & Markers',
    items: [
      '1 x Game Board',
      'Temple Pouch',
      'Consulship marker'
    ],
    description: 'The main playing surface and special markers that help track game progress. The board features a detailed map of ancient Rome, enhancing strategic gameplay.'
  }
];

const cardDetails = [
  {
    title: 'Spy Cards',
    description: 'Spies work to prevent incumbents from achieving their goals. They must be subtle in their actions while disrupting the plans of other players.',
    abilities: [
      'Prevent province control',
      'Disrupt incumbent plans',
      'Work covertly to achieve objectives'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    )
  },
  {
    title: 'Consul Disapprove Card',
    description: 'A powerful card that allows the Consul to veto actions involving army tokens. Must be used strategically as it can only be used once per consulship.',
    abilities: [
      'Veto army token transactions',
      'Gain 5 army tokens if unused',
      'One-time use per consulship'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    )
  },
  {
    title: 'Senate Disapprove Card',
    description: 'Similar to the Consul card, but for money token transactions. The Senate must carefully choose when to use this powerful ability.',
    abilities: [
      'Veto money token transactions',
      'Gain 5 money tokens if unused',
      'One-time use per consulship'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    title: 'Assembly Member Convene Cards',
    description: 'Allows assembly members to call for a vote on important matters. This can be used to influence the game in significant ways.',
    abilities: [
      'Call for a vote',
      'Influence game decisions',
      'One-time use per consulship'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    )
  },
  {
    title: 'Event Cards',
    description: 'Random events that can dramatically change the course of the game. Players must adapt their strategies based on these unexpected occurrences.',
    abilities: [
      'Trigger random events',
      'Affect all players',
      'Create dynamic gameplay'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  {
    title: 'Gift from Gods Cards',
    description: 'Special cards that provide powerful one-time abilities. These can be game-changing when used at the right moment.',
    abilities: [
      'Provide special abilities',
      'One-time use',
      'Strategic timing is crucial'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l-9-5v5l9 5 9-5v-5l-9 5z"/>
      </svg>
    )
  }
];

const tokenDetails = [
  {
    title: 'Money Tokens',
    description: 'Represent the financial resources of your faction. Used for various actions including bribes, construction, and maintaining your influence.',
    abilities: [
      'Purchase buildings and monuments',
      'Bribe other players',
      'Maintain province control',
      'Trade with other players'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    title: 'Army Tokens',
    description: 'Represent your military strength. Essential for conquering provinces and defending your territories from other players.',
    abilities: [
      'Conquer new provinces',
      'Defend against attacks',
      'Support allied players',
      'Maintain military presence'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    )
  },
  {
    title: 'Temple Tokens',
    description: 'Represent religious influence and divine favor. Used to gain special abilities and blessings from the gods.',
    abilities: [
      'Gain divine favor',
      'Activate special abilities',
      'Influence religious decisions',
      'Protect against divine wrath'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    )
  },
  {
    title: 'Player Tokens',
    description: 'Represent your presence on the board. Used to mark your position and influence in different provinces.',
    abilities: [
      'Mark territory control',
      'Track player movement',
      'Show political influence',
      'Indicate voting power'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    )
  }
];

const boardDetails = [
  {
    title: 'Game Board',
    description: 'A beautifully illustrated map of ancient Rome and its surrounding provinces. The board serves as the main playing surface where all strategic decisions unfold.',
    abilities: [
      'Detailed map of ancient Rome',
      'Province territories marked',
      'Strategic locations highlighted',
      'Movement paths and connections'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    title: 'Temple Pouch',
    description: 'A special container for temple tokens, representing the sacred connection between players and the divine powers that influence the game.',
    abilities: [
      'Store temple tokens',
      'Track divine favor',
      'Manage religious resources',
      'Secure sacred items'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    )
  },
  {
    title: 'Consulship Marker',
    description: 'A special marker that tracks the current consulship and helps players keep track of the game\'s political cycles.',
    abilities: [
      'Track consulship progress',
      'Mark political cycles',
      'Indicate current phase',
      'Coordinate game timing'
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    )
  }
];

export default function Components() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedCards, setSelectedCards] = useState<{[key: string]: string | null}>({
    cards: null,
    tokens: null,
    board: null
  });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setSelectedCards({
      cards: null,
      tokens: null,
      board: null
    });
  };

  const toggleCard = (cardId: string, category: string) => {
    setSelectedCards(prev => ({
      ...prev,
      [category]: prev[category] === cardId ? null : cardId
    }));
  };

  const renderCardDetails = (cards: typeof cardDetails | typeof tokenDetails | typeof boardDetails, category: string) => {
    return (
      <div className="space-y-12">
        {cards.map((card, index) => {
          const cardId = `${category}-${card.title}-${index}`;
          return (
            <motion.div
              key={cardId}
              layout="position"
              className={`bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg transform transition-all duration-500 overflow-hidden ${
                selectedCards[category] === cardId ? 'ring-2 ring-amber-500' : ''
              } ${
                isHovered === cardId ? 'hover:shadow-xl' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                layout: { 
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              onClick={() => toggleCard(cardId, category)}
              onMouseEnter={() => setIsHovered(cardId)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="relative">
                <motion.div 
                  layout="position"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="p-8"
                >
                  <motion.div 
                    layout="position"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-start gap-6"
                  >
                    <motion.div
                      layout="position"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-shrink-0 bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-xl shadow-sm"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-16 h-16 flex items-center justify-center"
                      >
                        {card.icon}
                      </motion.div>
                    </motion.div>
                    <div className="flex-grow">
                      <motion.div 
                        layout="position"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex items-center justify-between"
                      >
                        <motion.h3 
                          layout="position"
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="text-2xl font-serif text-amber-900 mb-2"
                        >
                          {card.title}
                        </motion.h3>
                        <motion.div
                          layout="position"
                          animate={{ rotate: selectedCards[category] === cardId ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="flex-shrink-0 ml-4"
                        >
                          <svg 
                            className="w-6 h-6 text-amber-800" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 9l-7 7-7-7" 
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                      <motion.p 
                        layout="position"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="text-stone-600"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {selectedCards[category] === cardId && (
                    <motion.div
                      layout="position"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut",
                        height: {
                          duration: 0.4,
                          ease: "easeInOut"
                        }
                      }}
                      className="border-t border-amber-100"
                    >
                      <motion.div 
                        layout="position"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="p-8 bg-gradient-to-br from-amber-50/50 to-amber-100/30"
                      >
                        <motion.div 
                          layout="position"
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="flex items-center gap-3 mb-6"
                        >
                          <svg 
                            className="w-5 h-5 text-amber-800" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M13 10V3L4 14h7v7l9-11h-7z" 
                            />
                          </svg>
                          <motion.h4 
                            layout="position"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-xl font-serif text-amber-800"
                          >
                            Abilities & Features
                          </motion.h4>
                        </motion.div>
                        <motion.ul 
                          layout="position"
                          transition={{ duration: 0.4, ease: "easeInOut", delayChildren: 0.1, staggerChildren: 0.05 }}
                          className="grid gap-4 sm:grid-cols-2"
                        >
                          {card.abilities.map((ability, abilityIndex) => (
                            <motion.li
                              layout="position"
                              key={`${cardId}-ability-${abilityIndex}`}
                              className="flex items-start gap-3 group bg-white/60 p-4 rounded-lg"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ 
                                duration: 0.3,
                                delay: 0.1 + abilityIndex * 0.05,
                                ease: "easeOut"
                              }}
                            >
                              <span className="text-amber-800 font-serif text-lg transform group-hover:scale-110 transition-transform">•</span>
                              <span className="text-stone-700 group-hover:text-amber-900 transition-colors">{ability}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/20">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              className="text-5xl font-serif text-center mb-12 text-amber-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Game Components
            </motion.h1>

            {/* Component Overview */}
            <motion.div
              className="mb-16 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif mb-4 text-amber-900">Component Overview</h2>
              <p className="text-stone-600 text-lg">
                Each component in the game has been carefully designed to enhance the strategic depth and historical theme of the game. 
                From the various cards that represent political power and divine intervention, to the tokens that track resources and military strength, 
                every piece plays a crucial role in the gameplay experience.
              </p>
            </motion.div>
            
            {/* Component Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {gameComponents.map((component) => (
                <motion.div
                  key={component.id}
                  className={`p-8 rounded-xl cursor-pointer transform transition-all duration-300 ${
                    expandedCategory === component.id 
                      ? 'bg-gradient-to-br from-amber-800 to-amber-700 text-white shadow-lg scale-105' 
                      : 'bg-white hover:bg-amber-50'
                  }`}
                  whileHover={{ scale: expandedCategory === component.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleCategory(component.id)}
                >
                  <h3 className="text-2xl font-serif mb-4">{component.category}</h3>
                  <p className={expandedCategory === component.id ? 'text-white/90' : 'text-stone-600'}>
                    {component.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {expandedCategory === 'cards' && (
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 
                    className="text-4xl font-serif text-center mb-12 text-amber-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Card Details
                  </motion.h2>
                  {renderCardDetails(cardDetails, 'cards')}
                </motion.div>
              )}

              {expandedCategory === 'tokens' && (
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 
                    className="text-4xl font-serif text-center mb-12 text-amber-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Token Details
                  </motion.h2>
                  {renderCardDetails(tokenDetails, 'tokens')}
                </motion.div>
              )}

              {expandedCategory === 'board' && (
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2 
                    className="text-4xl font-serif text-center mb-12 text-amber-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Game Board & Markers
                  </motion.h2>
                  {renderCardDetails(boardDetails, 'board')}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </PageTransition>
  );
} 