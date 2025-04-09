'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

// Add these type definitions at the top of the file after imports
type EventCard = {
  title: string;
  description: string;
};

type AdditionalSection = {
  title: string;
  description: string;
  icon: string;
  content: EventCard[] | string[];
};

const gamePhases = [
  {
    title: "Turn Actions",
    description: "Available actions during your turn in any phase.",
    icon: "🎲",
    details: [
      "1. Travel: Roll dice and move",
      "2. Conquer: Pay army points to conquer provinces",
      "3. Challenge: Contest provinces or players",
      "4. Acquire gift from gods",
    ]
  },
  {
    title: "Command Phase",
    description: "Issue orders to your legions and manage your military resources.",
    icon: "⚔️",
    details: [
      "Deploy legions across your territories",
      "Assign generals to lead your armies",
      "Plan military campaigns and strategies",
      "Manage supply lines and resources"
    ]
  },
  {
    title: "Senate Phase",
    description: "Navigate political intrigue and make crucial diplomatic decisions.",
    icon: "👑",
    details: [
      "Negotiate with other players and senators",
      "Propose and vote on laws",
      "Form political alliances",
      "Handle civil unrest and maintain stability"
    ]
  },
  {
    title: "Development Phase",
    description: "Build monuments, improve cities, and expand your empire.",
    icon: "🏛️",
    details: [
      "Construct buildings and monuments",
      "Develop infrastructure and trade routes",
      "Research new technologies",
      "Improve city amenities and defenses"
    ]
  }
];

const rulesSections = [
  {
    title: 'Game Objectives',
    content: [
      'The primary objective is to control as much territory as possible',
      'Players compete to expand their influence across the map',
      'Territory control is determined by the number of provinces under your command',
      'The player with the most territory at the end of the game wins'
    ],
    description: "The game's main objective is territorial expansion. Players must strategically manage their resources and make tactical decisions to gain control of as many provinces as possible. The player who successfully controls the most territory by the end of the game emerges victorious."
  },
  {
    title: 'Player Roles',
    content: [
      'Consul: Controls military, distributes army tokens, can disapprove 1 action involving army tokens',
      'Senate: Controls treasury, distributes money tokens, can disapprove 1 action involving money tokens',
      'Assembly Member: Can convene all legislators once to vote on important decisions'
    ],
    description: "Each player takes on a specific role with unique powers and responsibilities. The Consul commands military forces, the Senate manages financial resources, and Assembly Members can influence important decisions through voting. These roles create a dynamic balance of power and require cooperation and negotiation between players."
  },
  {
    title: 'Game Flow',
    content: [
      '1. Youngest player becomes Consul',
      '2. Consul elects Senate',
      '3. Others become Assembly Members',
      '4. Consul distributes army tokens',
      '5. Senate distributes money tokens',
      '6. Main gameplay begins',
      '7. Consulship rotates',
      '8. Complete 15 government cycles',
    ],
    description: "The game progresses through a structured sequence of setup and gameplay phases. Players begin by assuming their roles and receiving resources, then proceed through government cycles where they take turns performing actions. The game ends after 15 consul passes, at which point roles are revealed and the winner is determined."
  }
];

const additionalSections: AdditionalSection[] = [
  {
    title: 'Event Cards',
    description: 'Random events that can dramatically change the course of the game. Players must adapt their strategies based on these unexpected occurrences.',
    icon: '⚡',
    content: [
      {
        title: 'Revolt in province',
        description: 'A province rises up against its ruler. The controlling player must spend military resources to maintain control or risk losing the province.'
      },
      {
        title: 'Snap election',
        description: 'An immediate election is called. All players must participate in voting for a new Consul, potentially disrupting current political alliances.'
      },
      {
        title: 'Capital meeting',
        description: 'All players must return to Rome for an emergency senate meeting. This can disrupt ongoing military campaigns and territorial expansion plans.'
      },
      {
        title: 'Exile',
        description: 'One player is temporarily exiled from Rome. They must move to a distant province and cannot participate in senate activities for one round.'
      },
      {
        title: 'Barbarian ambush',
        description: 'Barbarian forces attack a province. The controlling player must successfully defend or lose army tokens and potentially the province.'
      },
      {
        title: 'Financial debt',
        description: 'Economic crisis hits. Players must pay a portion of their money tokens or lose influence in their controlled provinces.'
      },
      {
        title: 'Foreign war',
        description: 'Rome enters conflict with a foreign power. All players must contribute army tokens or face penalties to their influence.'
      },
      {
        title: 'Leadership shuffle',
        description: 'Political upheaval forces a change in leadership roles. Players must redistribute current positions of power.'
      },
      {
        title: 'State crime',
        description: 'A player is accused of crimes against Rome. They must defend themselves in the senate or face severe penalties.'
      },
      {
        title: 'Province success',
        description: 'A province experiences a golden age. The controlling player gains bonus resources and increased influence.'
      },
      {
        title: 'Troop management',
        description: 'Military reforms require redistribution of forces. Players must reorganize their army tokens across their territories.'
      },
      {
        title: 'Sickness',
        description: 'Disease spreads through provinces. Players must spend resources on medicine or risk losing influence in affected areas.'
      },
    ]
  },
  {
    title: 'Gifts from the Gods',
    description: 'Special divine interventions that provide powerful one-time abilities. These can be game-changing when used at the right moment.',
    icon: '⚜️',
    content: [
      {
        title: 'Godspeed',
        description: 'The gods bless your journey. Move to any province on the board without spending movement points.'
      },
      {
        title: 'Power of consulship',
        description: 'Channel the authority of the consul. Take one additional action during your turn that would normally require consul approval.'
      },
      {
        title: 'God on your side',
        description: 'Divine favor strengthens your position. Add two additional army tokens to any one province you control.'
      },
      {
        title: 'Destruction by the gods',
        description: 'Call upon divine wrath. Remove all tokens from one province, forcing its owner to rebuild their presence.'
      },
      {
        title: 'Divine manipulation',
        description: 'The gods influence mortal affairs. Force another player to take or undo one specific action of your choice.'
      },
      {
        title: 'Relocation',
        description: 'Divine winds guide your forces. Move any number of your tokens from one province to another adjacent province.'
      },
      {
        title: 'Pocket',
        description: 'Create a divine vault. Store up to three tokens of any type to be used in a future turn.'
      },
      {
        title: 'Immunity',
        description: 'Gain divine protection. Prevent one action or event card from affecting you or your provinces.'
      }
    ]
  }
];

export default function GameplayRules() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

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
              <h1 className="text-4xl font-serif text-center mb-12 text-amber-900">Gameplay & Rules</h1>
              
              {/* Game Phases Section */}
              <div className="mb-24">
                <h2 className="text-3xl font-serif text-center mb-8 text-amber-900">Game Phases</h2>
                
                {/* Turn Actions Card */}
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">🎲</div>
                    <div>
                      <h3 className="text-2xl font-serif text-amber-900">Available Turn Actions</h3>
                      <p className="text-stone-600 mt-1">Actions you can take during any phase of your turn</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gamePhases[0].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-800 mr-2">•</span>
                        <span className="text-stone-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Main Game Phases */}
                <h3 className="text-2xl font-serif text-center mb-6 text-amber-900">Main Game Phases</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {gamePhases.slice(1).map((phase, index) => (
                    <motion.div
                      key={phase.title}
                      className={`p-6 rounded-lg cursor-pointer ${
                        activePhase === index + 1 ? 'bg-amber-800 text-white' : 'bg-white hover:bg-amber-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActivePhase(index + 1)}
                    >
                      <div className="text-4xl mb-4">{phase.icon}</div>
                      <h3 className="text-xl font-serif mb-2">{phase.title}</h3>
                      <p className={activePhase === index + 1 ? 'text-white/90' : 'text-stone-600'}>
                        {phase.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Selected Phase Details */}
                {activePhase > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-lg"
                  >
                    <h2 className="text-2xl font-serif mb-4">{gamePhases[activePhase].title}</h2>
                    <div className="prose max-w-none">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="mb-4">In this phase, you'll:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {gamePhases[activePhase].details.map((detail, index) => (
                            <li key={index} className="text-stone-600">{detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Rules Section */}
              <div>
                <h2 className="text-3xl font-serif text-center mb-8 text-amber-900">Game Rules</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {rulesSections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      className={`p-6 rounded-lg cursor-pointer ${
                        activeSection === index ? 'bg-amber-800 text-white' : 'bg-white hover:bg-amber-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveSection(index)}
                    >
                      <h3 className="text-xl font-serif mb-4">{section.title}</h3>
                      <p className={activeSection === index ? 'text-white/90' : 'text-stone-600'}>
                        Click to view details
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-12 bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-serif mb-6">{rulesSections[activeSection].title}</h2>
                  <div className="prose max-w-none">
                    <p className="text-stone-600 mb-4">
                      {rulesSections[activeSection].description}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      {rulesSections[activeSection].content.map((item, index) => (
                        <li key={index} className="text-stone-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-3xl font-serif mb-8 text-amber-900">Additional Game Elements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {additionalSections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="text-4xl mr-4">{section.icon}</div>
                          <div>
                            <h3 className="text-2xl font-serif text-amber-900">{section.title}</h3>
                            <p className="text-stone-600 mt-1">{section.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {section.title === 'Event Cards' ? (
                            (section.content as EventCard[]).map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                className={`bg-stone-50 p-3 rounded-lg cursor-pointer ${
                                  selectedEvent === item.title ? 'ring-2 ring-amber-500' : ''
                                }`}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedEvent(selectedEvent === item.title ? null : item.title)}
                              >
                                <p className="text-stone-600 font-medium">
                                  {item.title}
                                </p>
                              </motion.div>
                            ))
                          ) : section.title === 'Gifts from the Gods' ? (
                            (section.content as EventCard[]).map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                className={`bg-stone-50 p-3 rounded-lg cursor-pointer ${
                                  selectedGift === item.title ? 'ring-2 ring-amber-500' : ''
                                }`}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedGift(selectedGift === item.title ? null : item.title)}
                              >
                                <p className="text-stone-600 font-medium">
                                  {item.title}
                                </p>
                              </motion.div>
                            ))
                          ) : (
                            (section.content as string[]).map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                className="bg-stone-50 p-3 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <p className="text-stone-600">
                                  {item}
                                </p>
                              </motion.div>
                            ))
                          )}
                        </div>
                        {selectedEvent && section.title === 'Event Cards' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 bg-amber-50 rounded-lg"
                          >
                            <h4 className="font-serif text-lg text-amber-900 mb-2">{selectedEvent}</h4>
                            <p className="text-stone-600">
                              {((section.content as EventCard[]).find(item => item.title === selectedEvent))?.description}
                            </p>
                          </motion.div>
                        )}
                        {selectedGift && section.title === 'Gifts from the Gods' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 bg-amber-50 rounded-lg"
                          >
                            <h4 className="font-serif text-lg text-amber-900 mb-2">{selectedGift}</h4>
                            <p className="text-stone-600">
                              {((section.content as EventCard[]).find(item => item.title === selectedGift))?.description}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
} 