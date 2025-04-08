  // ... existing code ...
        </section>

        {/* Game Overview & Future Development */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif mb-8 text-amber-900">Essential Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif mb-2">Historical Context</h3>
                    <p className="text-stone-600 mb-2">Dive deep into the rich history of Ancient Rome that inspired this game.</p>
                    <a href="/about" className="text-amber-800 hover:text-amber-900">Learn more →</a>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Rules & Gameplay</h3>
                    <p className="text-stone-600 mb-2">Master the core mechanics and strategies to lead your empire to victory.</p>
                    <a href="/gameplay-rules" className="text-amber-800 hover:text-amber-900">View rules →</a>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Game Components</h3>
                    <p className="text-stone-600 mb-2">Explore the carefully crafted components that bring the game to life.</p>
                    <a href="/components" className="text-amber-800 hover:text-amber-900">See components →</a>
                  </div>
                </div>
              </motion.div>

              {/* Future Development */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-serif mb-8 text-amber-900">Future Development</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif mb-4">Areas for Improvement</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-amber-800 mr-2">•</span>
                        <div>
                          <span className="font-semibold">Enhanced Digital Integration</span>
                          <p className="text-stone-600">Developing a companion app for streamlined gameplay tracking and historical information.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-800 mr-2">•</span>
                        <div>
                          <span className="font-semibold">Expanded Campaign Mode</span>
                          <p className="text-stone-600">Creating a narrative-driven campaign that spans multiple gaming sessions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-800 mr-2">•</span>
                        <div>
                          <span className="font-semibold">Additional Historical Events</span>
                          <p className="text-stone-600">Introducing more historical events and characters to increase gameplay variety.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-800 mr-2">•</span>
                        <div>
                          <span className="font-semibold">Accessibility Features</span>
                          <p className="text-stone-600">Implementing colorblind-friendly components and multilingual support.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
// ... existing code ...