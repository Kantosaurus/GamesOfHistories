'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

type ContentItem = {
  title: string;
  isNew?: boolean;
  description: string;
  image: string;
  gameEffect?: string;
};

type HistoricalSection = {
  id: string;
  title: string | JSX.Element;
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
        image: '/media/images/roman senate.jpg'
      },
      {
        title: 'Consuls',
        description: 'The consulship arose as one of the most important offices in the Roman Republic, created after the expulsion of the last Roman king, Tarquin the Proud, in 509 BCE. Consuls were elected annually by the people through the Centuriate Assembly and served as the chief magistrates of Rome, wielding executive powers similar to those once held by kings. However, to prevent tyranny, two consuls were always chosen, and their authority was balanced by the ability to veto each other\'s decisions. The existence of consuls ensured that no single individual could monopolize power, reflecting the Republic\'s commitment to shared leadership and checks on authority. Their role symbolized both the unity and the division of power necessary for maintaining order in a growing republic.',
        image: '/media/images/consuls.jpg'
      },
      {
        title: 'Assembly',
        description: 'The Roman assemblies, such as the Centuriate Assembly, Tribal Assembly, and Plebeian Council, came into being as mechanisms for popular participation in governance and decision-making. These assemblies allowed citizens to vote on laws, elect officials, and even serve as courts for certain legal matters. Organized based on wealth, tribe, or class, they reflected Rome\'s efforts to incorporate different social strata into the political process while still favoring the wealthy elites. The assemblies existed to legitimize the actions of the Senate and magistrates, ensuring that major decisions had the backing of the citizenry. By providing a platform for collective deliberation and action, the assemblies helped bridge the gap between the ruling aristocracy and the broader population, though inequalities persisted in how voting power was distributed.',
        image: '/media/images/assemblies roman.jpg'
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
        image: '/media/images/Roman Legion.jpeg'
      },
      {
        title: 'Military Strategy',
        description: 'Roman military strategy combined disciplined formations, engineering prowess, and tactical flexibility. The famous "testudo" formation and siege warfare techniques were key to their success.',
        image: '/media/images/Roman Strategies.png'
      },
      {
        title: 'Military Roads',
        description: 'Rome built an extensive network of roads to move troops quickly across the empire. These roads also facilitated trade and communication, helping to maintain control over conquered territories.',
        image: '/media/images/Military Roads.jpg'
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
        image: '/media/images/Social classes.png'
      },
      {
        title: 'Religion',
        description: 'Roman religion was polytheistic, with gods and goddesses for every aspect of life. Religious ceremonies and festivals were important social events that reinforced community bonds.',
        image: '/media/images/Religion Rome.jpg'
      },
      {
        title: 'Daily Life',
        description: 'Daily life in Rome varied greatly by social class. While the wealthy enjoyed luxurious villas and elaborate meals, common citizens lived in crowded insulae and worked in various trades.',
        image: '/media/images/Daily Life.png'
      }
    ]
  },
  {
    id: 'events',
    title: (
      <div className="flex items-center">
        Events Cards
        <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-500 text-white rounded-full">
          New
        </span>
      </div>
    ),
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        title: "The Conflict of the Orders (494 BCE)",
        description: "A pivotal moment in Roman history when social and political inequality led to the plebeians' secession, forcing the Senate to reform and elect new leadership. This event shaped Rome's political structure and established important precedents for handling class conflicts.",
        image: '/media/images/The Conflict of the Orders (494 BCE).jpg',
        gameEffect: 'There is a violent conflict in the government and the senate decides to hold a snap election. Everyone votes for a new consul immediately.'
      },
      {
        title: "Punic Wars (264-146 BCE)",
        isNew: true,
        description: "A series of three major wars between Rome and Carthage for control of the western Mediterranean. Intelligence leaks and espionage played crucial roles in strategic maneuvers during the wars, with Scipio Africanus being a key figure in these operations.",
        image: '/media/images/Punic Wars (264-146 BCE).jpg',
        gameEffect: 'Information leak! Choose 1 player who can view your allegiance card.'
      },
      {
        title: "Hannibal's Retreat (203 BCE)",
        description: "After his campaigns in Italy, Hannibal had to retreat to Carthage, leaving behind territories he once held. This retreat marked a turning point in the Second Punic War and demonstrated the importance of maintaining supply lines and territorial control.",
        image: '/media/images/Hannibal\'s Retreat (203 BCE).jpg',
        gameEffect: 'You left your men behind! Go back to the last province you conquered.'
      },
      {
        title: "Catilinarian Conspiracy (63 BCE)",
        description: "During his consulship, Cicero called an emergency meeting of the Senate to address the threat posed by Catiline's conspiracy to overthrow the Roman government. This event highlighted the importance of swift political action in times of crisis.",
        image: '/media/images/Catilinarian Conspiracy (63 BCE).jpg',
        gameEffect: 'The consul calls for a meeting at the capital. All players move to the capital immediately.'
      },
      {
        title: "Exile of Julius Caesar (58 BCE)",
        description: "Political machinations and accusations of misconduct forced Caesar into exile briefly before his rise to power. This period demonstrated how political fortunes could quickly change in Roman politics.",
        image: '/media/images/Exile of Julius Caesar (58 BCE).jpg',
        gameEffect: 'You are exiled by the consul. You miss one turn.'
      },
      {
        title: "Pax Romana (27 BCE - 180 CE)",
        description: "The long period of relative peace and prosperity under Augustus and his successors allowed Roman provinces to flourish economically. This era saw significant urban development, trade expansion, and cultural advancement.",
        image: '/media/images/Pax Romana (27 BCE - 180 CE).jpg',
        gameEffect: 'Your provinces are becoming very successful. Gain 3 money tokens.'
      },
      {
        title: "Adoption of Tiberius (4 CE)",
        description: "Augustus adopted Tiberius as his heir, effectively shuffling the line of succession to ensure stability. This decision had far-reaching consequences for the future of the Roman Empire.",
        image: '/media/images/Adoption of Tiberius (4 CE).jpg',
        gameEffect: 'Leadership shuffle. Swap seats with a player of your choice.'
      },
      {
        title: "Exile of Ovid (8 CE)",
        description: "Ovid was exiled by Augustus for reasons that remain unclear but were purportedly related to a scandal involving the imperial family. This event demonstrates the power of the emperor to punish perceived threats to Roman values and imperial authority.",
        image: '/media/images/Exile of Ovid (8 CE).jpg',
        gameEffect: 'You have committed a grave crime against the state. You are exiled for 1 consulship.'
      },
      {
        title: "Battle of Teutoburg Forest (9 CE)",
        description: "A devastating ambush orchestrated by Arminius of the Cherusci tribe resulted in the complete destruction of three Roman legions. This battle marked one of Rome's most significant military defeats and halted Roman expansion in Germania.",
        image: '/media/images/Battle of Teutoburg Forest (9 CE).jpg',
        gameEffect: 'You are ambushed by an unknown barbaric tribe. Your army takes a hit. Lose 3 army tokens.'
      },
      {
        title: "Financial Crisis of 33 CE",
        description: "During the reign of Emperor Tiberius, economic mismanagement led to a severe financial crisis that required significant government intervention. This event demonstrated the interconnected nature of Roman provincial and imperial finances.",
        image: '/media/images/Financial Crisis of 33 CE.jpeg',
        gameEffect: 'One of your provinces is facing a heavy financial debt. You need to clear the debt. Lose 3 money tokens.'
      },
      {
        title: "Betrayal of Sejanus (31 CE)",
        isNew: true,
        description: "Sejanus, once a trusted advisor to Tiberius, was executed after being implicated in a plot against the emperor, highlighting political double-crossing.",
        image: '/media/images/Betrayal of Sejanus.jpg',
        gameEffect: 'Double crossing: 2 players\' allegiance cards are shuffled and redealt to them.'
      },
      {
        title: "Boudica's Revolt (60-61 CE)",
        description: "Led by Queen Boudica of the Iceni tribe, this massive uprising against Roman rule in Britain resulted in significant territorial losses. The revolt was sparked by Roman oppression and personal grievances, demonstrating the fragility of Roman control in newly conquered territories.",
        image: '/media/images/Boudica\'s Revolt (60-61 CE).jpeg',
        gameEffect: 'A revolt happens in one of your provinces. You must forfeit a province of your choice.'
      },
      {
        title: "Antonine Plague (165-180 CE)",
        description: "A devastating pandemic that significantly weakened the Roman military and civilian population during the reign of Marcus Aurelius. The plague demonstrated how disease could impact imperial stability and military capability.",
        image: '/media/images/Antonine Plague (165-180 CE).jpg',
        gameEffect: 'An unknown sickness has struck and your army has been hit. Lose 3 army tokens.'
      },
      {
        title: "Crisis of the Third Century (235-284 CE)",
        description: "A period of intense military and political turmoil where frequent reinforcements were needed to quell revolts and invasions. This crisis tested the empire's ability to maintain control over its vast territories.",
        image: '/media/images/Crisis of the Third Century (235-284 CE).jpg',
        gameEffect: 'You receive fresh troops from the capital. Gain 3 army tokens.'
      }
    ]
  },
  {
    id: 'gifts',
    title: (
      <div className="flex items-center">
        Gifts of God Cards
        <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-500 text-white rounded-full">
          New
        </span>
      </div>
    ),
    icon: (
      <svg className="w-12 h-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    content: [
      {
        title: "Temple of Jupiter Optimus Maximus (509 BCE)",
        description: "The dedication of this temple was seen as a divine blessing for Rome's military campaigns. Romans believed that invoking Jupiter's favor would bring them success in battle. This temple became the center of Roman state religion and a symbol of divine support for Roman endeavors.",
        image: '/media/images/Temple of Jupiter Optimus Maximus.jpg',
        gameEffect: 'Godspeed: You get to add 5 to your dice roll.'
      },
      {
        title: "The Sibylline Books (500 BCE)",
        isNew: true,
        description: "The Sibylline Books were sacred texts consulted by the Roman Senate during times of crisis. These books were believed to contain divine revelations that could guide Rome through difficult decisions. Similarly, you gain insight into another player's allegiance through divine intervention.",
        image: '/media/images/The Sibylline Books.jpg',
        gameEffect: 'Divine revelation: You get to see the allegiance card of one player. (10 money tokens)'
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

const TitleComponent = ({ title }: { title: string | JSX.Element }) => {
  if (typeof title === 'string') {
    return <>{title}</>;
  }
  return title;
};

export default function HistoricalContext() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSectionClick = (sectionId: string) => {
    setIsTransitioning(true);
    setActiveSection(sectionId);
    setCurrentSlide(0);
  };

  const handleScroll = () => {
    if (!containerRef.current || isScrolling.current) return;

    const container = containerRef.current;
    const sections = container.getElementsByTagName('section');
    const containerHeight = window.innerHeight;
    const scrollPosition = container.scrollTop;
    
    const newSlideIndex = Math.round(scrollPosition / containerHeight);
    
    if (newSlideIndex !== currentSlide) {
      setCurrentSlide(newSlideIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    
    const sections = containerRef.current.getElementsByTagName('section');
    if (sections[index]) {
      isScrolling.current = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      setCurrentSlide(index);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set a new timeout to reset isScrolling
      timeoutRef.current = setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!activeSection) return;

    const content = historicalSections.find(s => s.id === activeSection)?.content || [];
    const maxSlides = content.length - 1;

    if (e.key === 'ArrowDown' && currentSlide < maxSlides) {
      scrollToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' && currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  const scrollToNewContent = () => {
    if (!containerRef.current) return;
    
    const currentSection = historicalSections.find(section => section.id === activeSection);
    if (!currentSection) return;

    const newItems = currentSection.content
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.isNew);

    if (newItems.length === 0) return;

    // Find the next new item after the current slide
    const nextNewItem = newItems.find(({ index }) => index > currentSlide) || newItems[0];
    
    if (nextNewItem) {
      scrollToSlide(nextNewItem.index);
    }
  };

  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      const container = containerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll);
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      const container = containerRef.current;
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection, currentSlide]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-stone-900">
        <Navbar />
        
        {/* New Content Buttons - Show based on active section */}
        {activeSection === 'gifts' && (
          <motion.button
            className="fixed top-24 right-8 z-50 px-4 py-2 bg-amber-800/90 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
            onClick={scrollToNewContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>New Content</span>
            <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/20 text-amber-100 rounded-full border border-amber-500/30">NEW</span>
          </motion.button>
        )}
        {activeSection === 'events' && (
          <motion.button
            className="fixed top-24 right-8 z-50 px-4 py-2 bg-amber-800/90 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
            onClick={scrollToNewContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>New Content</span>
            <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/20 text-amber-100 rounded-full border border-amber-500/30">NEW</span>
          </motion.button>
        )}

        {/* Main Category Selection */}
        <AnimatePresence>
          {!activeSection && (
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen pt-32 pb-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1 
                  className="text-5xl font-serif text-center mb-16 text-amber-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Explore Roman History
                </motion.h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {historicalSections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      className="group relative h-64 rounded-lg overflow-hidden"
                      onClick={() => handleSectionClick(section.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-stone-900/20 group-hover:from-amber-900/90 group-hover:to-amber-900/20 transition-all duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <div className="text-amber-100 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-serif text-amber-100 text-center mb-2">
                          {section.title}
                        </h2>
                        <p className="text-amber-200/80 text-sm text-center">
                          Click to explore
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Content Sections */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900 overflow-y-auto scroll-smooth"
              style={{ zIndex: 40 }}
              ref={containerRef}
              onScroll={handleScroll}
            >
              {/* Back Button */}
              <motion.button
                className="fixed top-24 left-8 z-50 px-4 py-2 bg-amber-800/90 text-white rounded-lg hover:bg-amber-700 transition-colors"
                onClick={() => {
                  setActiveSection(null);
                  setCurrentSlide(0);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Categories
              </motion.button>

              {/* Navigation Dots */}
              <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
                {historicalSections
                  .find(section => section.id === activeSection)
                  ?.content.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-amber-500' : 'bg-amber-800/50 hover:bg-amber-800'
                      }`}
                      onClick={() => scrollToSlide(index)}
                    />
                  ))}
              </div>

              {/* Content */}
              <div className="pt-32">
                {/* Timeline Line for Events and Gifts */}
                {(activeSection === 'events' || activeSection === 'gifts') && (
                  <div className="fixed left-8 lg:left-16 top-0 bottom-0 w-1 bg-amber-800/30 z-30">
                    <div 
                      className="absolute top-0 bottom-0 w-full bg-amber-500"
                      style={{
                        backgroundImage: 'linear-gradient(180deg, transparent 0%, #92400e 10%, #92400e 90%, transparent 100%)',
                      }}
                    />
                  </div>
                )}
                {historicalSections
                  .find(section => section.id === activeSection)
                  ?.content.map((item, index) => (
                    <motion.section
                      key={item.title}
                      className="relative min-h-screen flex items-center justify-center snap-start snap-always"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      {/* Timeline Node for Events and Gifts */}
                      {(activeSection === 'events' || activeSection === 'gifts') && (
                        <motion.div
                          className="absolute left-8 lg:left-16 z-40 transform -translate-x-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 * index }}
                        >
                          <div className="w-8 h-8 rounded-full bg-amber-800 border-4 border-amber-500 shadow-lg" />
                          <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 text-amber-500 whitespace-nowrap text-sm">
                            {item.title.match(/\((\d+ (?:BCE|CE))\)/)?.[1] || ''}
                          </div>
                        </motion.div>
                      )}

                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30 z-10" />
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h2
                          className="text-4xl md:text-5xl font-serif text-amber-100 mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 * index }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {item.title}
                            {item.isNew && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-amber-800/80 text-amber-100 rounded-full border border-amber-500/30">NEW</span>
                            )}
                          </div>
                        </motion.h2>
                        <motion.p
                          className="text-lg md:text-xl text-amber-100/90 mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 * index }}
                        >
                          {item.description}
                        </motion.p>
                        {item.gameEffect && (
                          <motion.div
                            className="inline-block bg-amber-800/80 px-6 py-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 * index }}
                          >
                            <h3 className="text-lg font-serif text-amber-100 mb-2">
                              Game Effect
                            </h3>
                            <p className="text-amber-200">
                              {item.gameEffect}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Scroll Indicator */}
                      {index < historicalSections.find(section => section.id === activeSection)!.content.length - 1 && (
                        <motion.button
                          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-100/60 cursor-pointer"
                          animate={{ y: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          onClick={() => scrollToSlide(index + 1)}
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </motion.button>
                      )}
                    </motion.section>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
} 