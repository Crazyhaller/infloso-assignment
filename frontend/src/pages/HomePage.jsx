import React from 'react'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-pink-400"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to MelodyVerse
      </motion.h1>
      <motion.p
        className="text-lg mb-4 text-purple-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your ultimate music streaming service
      </motion.p>
      <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-2xl w-80 border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-pink-400">
          Featured Playlists
        </h2>
        <ul className="list-disc list-inside text-purple-400">
          <li className="hover:text-pink-400 transition-colors duration-300">
            Top Hits
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Chill Vibes
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Workout Mix
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Party Anthems
          </li>
        </ul>
      </motion.div>

      {/* Additional Dummy Content for Scrolling */}
      <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-2xl w-80 border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300 mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-pink-400">
          Trending Artists
        </h2>
        <ul className="list-disc list-inside text-purple-400">
          <li className="hover:text-pink-400 transition-colors duration-300">
            Artist 1
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Artist 2
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Artist 3
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Artist 4
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-2xl w-80 border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300 mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-pink-400">
          New Releases
        </h2>
        <ul className="list-disc list-inside text-purple-400">
          <li className="hover:text-pink-400 transition-colors duration-300">
            Album 1
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Album 2
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Album 3
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Album 4
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-2xl w-80 border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300 mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-pink-400">Genres</h2>
        <ul className="list-disc list-inside text-purple-400">
          <li className="hover:text-pink-400 transition-colors duration-300">
            Pop
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Rock
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Jazz
          </li>
          <li className="hover:text-pink-400 transition-colors duration-300">
            Classical
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default HomePage
