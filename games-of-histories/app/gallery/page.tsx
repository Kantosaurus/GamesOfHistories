'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

type ContentItem = {
  title: string;
  description: string;
  image: string;
  gameEffect?: string;
};

type HistoricalSection = {
  id: string;
  title: string;
  icon: JSX.Element;
  content: ContentItem[];
};

const historicalSections: HistoricalSection[] = [
  {
    id: 'government',
    title: 'Roman Government',
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    content: [
      {
        title: 'The Senate',
        description: 'The Senate in ancient Rome was a powerful institution that emerged during the early days of the Roman monarchy, where it likely served as an advisory council to the king. After the fall of the monarchy and the establishment of the Republic, the Senate evolved into a central governing body composed primarily of aristocrats who held significant influence over state affairs. Although not an elected body, its members were appointed for life, typically from Rome\'s patrician class, and they controlled critical aspects of governance, including foreign policy, finances, and the appointment of magistrates. The Senate existed because it provided continuity and stability within the Roman political system, acting as a repository of experience and wisdom while ensuring the dominance of the elite in shaping the Republic\'s direction.',
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Consuls',
        description: 'The consulship arose as one of the most important offices in the Roman Republic, created after the expulsion of the last Roman king, Tarquin the Proud, in 509 BCE. Consuls were elected annually by the people through the Centuriate Assembly and served as the chief magistrates of Rome, wielding executive powers similar to those once held by kings. However, to prevent tyranny, two consuls were always chosen, and their authority was balanced by the ability to veto each other\'s decisions. The existence of consuls ensured that no single individual could monopolize power, reflecting the Republic\'s commitment to shared leadership and checks on authority. Their role symbolized both the unity and the division of power necessary for maintaining order in a growing republic.',
        image: 'https://images.unsplash.com/photo-1608817576152-26bbdb00afb7?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Assembly',
        description: 'The Roman assemblies, such as the Centuriate Assembly, Tribal Assembly, and Plebeian Council, came into being as mechanisms for popular participation in governance and decision-making. These assemblies allowed citizens to vote on laws, elect officials, and even serve as courts for certain legal matters. Organized based on wealth, tribe, or class, they reflected Rome\'s efforts to incorporate different social strata into the political process while still favoring the wealthy elites. The assemblies existed to legitimize the actions of the Senate and magistrates, ensuring that major decisions had the backing of the citizenry. By providing a platform for collective deliberation and action, the assemblies helped bridge the gap between the ruling aristocracy and the broader population, though inequalities persisted in how voting power was distributed.',
        image: 'https://images.unsplash.com/photo-1588592262495-4c1daa03012e?q=80&w=1920&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'military',
    title: 'Roman Military',
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    content: [
      {
        title: 'Legions',
        description: 'The Roman legions were the backbone of Rome\'s military might. Each legion consisted of about 5,000 soldiers, organized into cohorts and centuries, with specialized roles and equipment.',
        image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Military Strategy',
        description: 'Roman military strategy combined disciplined formations, engineering prowess, and tactical flexibility. The famous "testudo" formation and siege warfare techniques were key to their success.',
        image: 'https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Military Roads',
        description: 'Rome built an extensive network of roads to move troops quickly across the empire. These roads also facilitated trade and communication, helping to maintain control over conquered territories.',
        image: 'https://images.unsplash.com/photo-1621976360623-004223992275?q=80&w=1920&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'society',
    title: 'Roman Society',
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    content: [
      {
        title: 'Social Classes',
        description: 'Roman society was divided into several classes: patricians (nobles), plebeians (commoners), freedmen, and slaves. Each class had different rights and responsibilities.',
        image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Religion',
        description: 'Roman religion was polytheistic, with gods and goddesses for every aspect of life. Religious ceremonies and festivals were important social events that reinforced community bonds.',
        image: 'https://images.unsplash.com/photo-1594497935110-7f10c2d85d76?q=80&w=1920&auto=format&fit=crop'
      },
      {
        title: 'Daily Life',
        description: 'Daily life in Rome varied greatly by social class. While the wealthy enjoyed luxurious villas and elaborate meals, common citizens lived in crowded insulae and worked in various trades.',
        image: 'https://images.unsplash.com/photo-1563455915098-ea411b44da3c?q=80&w=1920&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'events',
    title: 'Events Cards',
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        title: "The Conflict of the Orders (494 BCE)",
        description: "A pivotal moment in Roman history when social and political inequality led to the plebeians' secession, forcing the Senate to reform and elect new leadership. This event shaped Rome's political structure and established important precedents for handling class conflicts.",
        image: 'https://images.unsplash.com/photo-1603888613934-ee2f7d143dd0?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'There is a violent conflict in the government and the senate decides to hold a snap election. Everyone votes for a new consul immediately.'
      },
      {
        title: "Punic Wars (264-146 BCE)",
        description: "A series of three major wars between Rome and Carthage for control of the western Mediterranean. These conflicts transformed Rome from a regional power into an empire, requiring unprecedented military and economic mobilization.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'The consul has decided to wage war against a foreign nation. All players contribute 1 quarter of their armies/money tokens to support the war.'
      },
      {
        title: "Hannibal's Retreat (203 BCE)",
        description: "After his campaigns in Italy, Hannibal had to retreat to Carthage, leaving behind territories he once held. This retreat marked a turning point in the Second Punic War and demonstrated the importance of maintaining supply lines and territorial control.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'You left your men behind! Go back to the last province you conquered.'
      },
      {
        title: "Catilinarian Conspiracy (63 BCE)",
        description: "During his consulship, Cicero called an emergency meeting of the Senate to address the threat posed by Catiline's conspiracy to overthrow the Roman government. This event highlighted the importance of swift political action in times of crisis.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'The consul calls for a meeting at the capital. All players move to the capital immediately.'
      },
      {
        title: "Exile of Julius Caesar (58 BCE)",
        description: "Political machinations and accusations of misconduct forced Caesar into exile briefly before his rise to power. This period demonstrated how political fortunes could quickly change in Roman politics.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'You are exiled by the consul. You miss one turn.'
      },
      {
        title: "Pax Romana (27 BCE - 180 CE)",
        description: "The long period of relative peace and prosperity under Augustus and his successors allowed Roman provinces to flourish economically. This era saw significant urban development, trade expansion, and cultural advancement.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'Your provinces are becoming very successful. Gain 3 money tokens.'
      },
      {
        title: "Adoption of Tiberius (4 CE)",
        description: "Augustus adopted Tiberius as his heir, effectively shuffling the line of succession to ensure stability. This decision had far-reaching consequences for the future of the Roman Empire.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'Leadership shuffle. Swap seats with a player of your choice.'
      },
      {
        title: "Exile of Ovid (8 CE)",
        description: "Ovid was exiled by Augustus for reasons that remain unclear but were purportedly related to a scandal involving the imperial family. This event demonstrates the power of the emperor to punish perceived threats to Roman values and imperial authority.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'You have committed a grave crime against the state. You are exiled for 1 consulship.'
      },
      {
        title: "Battle of Teutoburg Forest (9 CE)",
        description: "A devastating ambush orchestrated by Arminius of the Cherusci tribe resulted in the complete destruction of three Roman legions. This battle marked one of Rome's most significant military defeats and halted Roman expansion in Germania.",
        image: 'https://images.unsplash.com/photo-1576478897129-2bc4c5ffa471?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'You are ambushed by an unknown barbaric tribe. Your army takes a hit. Lose 3 army tokens.'
      },
      {
        title: "Betrayal of Sejanus (31 CE)",
        description: "Sejanus, once a trusted advisor to Tiberius, was executed after being implicated in a plot against the emperor. This event exemplifies the dangerous nature of Roman political intrigue and the consequences of betrayal.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: "Double crossing. 2 players' allegiance cards are shuffled and redealt to them."
      },
      {
        title: "Financial Crisis of 33 CE",
        description: "During the reign of Emperor Tiberius, economic mismanagement led to a severe financial crisis that required significant government intervention. This event demonstrated the interconnected nature of Roman provincial and imperial finances.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'One of your provinces is facing a heavy financial debt. You need to clear the debt. Lose 3 money tokens.'
      },
      {
        title: "Boudica's Revolt (60-61 CE)",
        description: "Led by Queen Boudica of the Iceni tribe, this massive uprising against Roman rule in Britain resulted in significant territorial losses. The revolt was sparked by Roman oppression and personal grievances, demonstrating the fragility of Roman control in newly conquered territories.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'A revolt happens in one of your provinces. You must forfeit a province of your choice.'
      },
      {
        title: "Antonine Plague (165-180 CE)",
        description: "A devastating pandemic that significantly weakened the Roman military and civilian population during the reign of Marcus Aurelius. The plague demonstrated how disease could impact imperial stability and military capability.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'An unknown sickness has struck and your army has been hit. Lose 3 army tokens.'
      },
      {
        title: "Crisis of the Third Century (235-284 CE)",
        description: "A period of intense military and political turmoil where frequent reinforcements were needed to quell revolts and invasions. This crisis tested the empire's ability to maintain control over its vast territories.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'You receive fresh troops from the capital. Gain 3 army tokens.'
      },
      {
        title: "Espionage during the Punic Wars",
        description: "Intelligence gathering and espionage played crucial roles in the strategic maneuvers during the wars between Rome and Carthage. Scipio Africanus was particularly known for his effective use of military intelligence.",
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1920&auto=format&fit=crop',
        gameEffect: 'Information leak! Choose 1 player who can view your allegiance card.'
      }
    ]
  },
  {
    id: 'gifts',
    title: 'Gifts of God Cards',
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    content: [
      {
        title: "The Sibylline Books (500 BCE)",
        description: "Sacred texts consulted by the Roman Senate during times of crisis. These books were believed to contain divine revelations that could guide Rome through difficult decisions. The Senate would turn to these prophetic books for guidance during natural disasters, plagues, or political crises.",
        image: '/media/images/The Sibylline Books.jpg',
        gameEffect: 'Divine revelation: You get to see the allegiance card of one player.'
      },
      {
        title: "Temple of Jupiter Optimus Maximus (509 BCE)",
        description: "The dedication of this temple was seen as a divine blessing for Rome's military campaigns. Romans believed that invoking Jupiter's favor would bring them success in battle. This temple became the center of Roman state religion and a symbol of divine support for Roman endeavors.",
        image: '/media/images/Temple of Jupiter Optimus Maximus.jpg',
        gameEffect: 'Godspeed: You get to add 5 to your dice roll.'
      },
      {
        title: "Hannibal Crossing the Alps (218 BCE)",
        description: "Hannibal famously relocated his forces across treacherous terrain to surprise the Romans during the Second Punic War. This legendary military maneuver demonstrated how unexpected movement could change the course of warfare and strategy.",
        image: '/media/images/Hannibal Crossing the Alps.jpg',
        gameEffect: 'Relocation: You can shift any 1 player by 5 steps in any direction of your choice.'
      },
      {
        title: "Plundering of Carthage (146 BCE)",
        description: "After defeating Carthage in the Third Punic War, Rome seized vast wealth, resources, and treasures, effectively 'stealing' everything valuable from its rival. This event marked the complete dominance of Rome over its greatest rival and the acquisition of immense wealth.",
        image: '/media/images/Plundering of Carthage.jpg',
        gameEffect: 'Pocket: You can choose to steal any of the following from a player: 5 money tokens, 5 army tokens, a gift from the gods card.'
      },
      {
        title: "Appointment of Augustus as Consul (43 BCE)",
        description: "During the power struggle after Julius Caesar's assassination, Octavian (later Augustus) manipulated the political system to become consul at a young age, bypassing traditional requirements. This unprecedented move demonstrated how political norms could be circumvented in times of crisis.",
        image: '/media/images/Appointment of Augustus as Consul.jpg',
        gameEffect: 'Power of consulship: You gain a 1-off consulship. When activated, you become the next consul. After that round, the consulship returns to the original succession.'
      },
      {
        title: "Eruption of Mount Vesuvius (79 CE)",
        description: "The catastrophic eruption buried entire cities under ash and lava, seen by many Romans as divine punishment or wrath. The destruction of Pompeii and Herculaneum served as a reminder of the gods' power to bring swift and complete destruction.",
        image: '/media/images/Eruption of Mount Vesuvius.jpg',
        gameEffect: 'Destruction by the gods: You can destroy the province of any 1 player.'
      },
      {
        title: "Constantine's Vision (312 CE)",
        description: "Before the Battle of the Milvian Bridge, Constantine reportedly saw a vision of the Christian cross and heard the words 'In this sign, you will conquer.' He attributed his victory to divine intervention, marking a turning point in Roman religious history.",
        image: '/media/images/Constantine\'s Vision.jpg',
        gameEffect: 'God on your side: You instantly win any challenge.'
      },
      {
        title: "Intercession of the Vestal Virgins",
        description: "The Vestal Virgins held immense religious authority and could intervene in state affairs, including influencing Senate decisions, based on their perceived connection to divine will. Their unique position allowed them to sway political decisions through religious authority.",
        image: '/media/images/Vestal Virgins.jpg',
        gameEffect: 'Divine manipulation: You can veto the army/money token distribution of the consul/senate at the start of a consulship.'
      },
      {
        title: "Sanctuary of the Temple of Vesta",
        description: "Temples like the Temple of Vesta were considered sacred sanctuaries where no violence or legal action could occur. This principle of religious sanctuary provided protection to those who sought refuge within sacred spaces.",
        image: '/media/images/Temple-of-Vesta.jpg',
        gameEffect: 'Immunity: You can deny a player from committing any moves against you.'
      }
    ]
  }
];

export default function HistoricalContext() {
  const [activeSection, setActiveSection] = useState('government');
  const [selectedContent, setSelectedContent] = useState(0);

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
              <h1 className="text-4xl font-serif text-center mb-12 text-amber-900">History</h1>
              
              {/* Section Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {historicalSections.map((section) => (
                  <motion.div
                    key={section.id}
                    className={`p-6 rounded-lg cursor-pointer ${
                      activeSection === section.id ? 'bg-amber-800 text-white' : 'bg-white hover:bg-amber-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveSection(section.id);
                      setSelectedContent(0);
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        className={`p-3 rounded-lg ${
                          activeSection === section.id ? 'bg-white/20' : 'bg-amber-50'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {section.icon}
                      </motion.div>
                    </div>
                    <h2 className="text-xl font-serif text-center">{section.title}</h2>
                  </motion.div>
                ))}
              </div>

              {/* Content Display */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl font-serif mb-4 text-amber-900">
                          {historicalSections.find(s => s.id === activeSection)?.content[selectedContent].title}
                        </h2>
                        <p className="text-stone-600 mb-4">
                          {historicalSections.find(s => s.id === activeSection)?.content[selectedContent].description}
                        </p>
                        {(activeSection === 'events' || activeSection === 'gifts') && (
                          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h3 className="text-lg font-serif text-amber-900 mb-2">Game Effect</h3>
                            <p className="text-amber-800">
                              {historicalSections.find(s => s.id === activeSection)?.content[selectedContent].gameEffect}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                        <img
                          src={historicalSections.find(s => s.id === activeSection)?.content[selectedContent].image}
                          alt={historicalSections.find(s => s.id === activeSection)?.content[selectedContent].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content Navigation */}
                    <div className="flex justify-center mt-8 space-x-4">
                      {historicalSections
                        .find(s => s.id === activeSection)
                        ?.content.map((_, index) => (
                          <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                              selectedContent === index ? 'bg-amber-800' : 'bg-amber-200'
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedContent(index)}
                          />
                        ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
} 