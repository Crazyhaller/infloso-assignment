import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { token } = useSelector((state) => state.user)
  const location = useLocation()

  return (
    <motion.nav
      className="bg-gray-900 p-4 shadow-lg fixed w-full z-10 top-0 border-b-4 border-pink-500"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <motion.div
          className="text-3xl font-extrabold text-pink-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/home">MelodyVerse</a>
        </motion.div>
        <div className="flex flex-wrap space-x-4 mt-2 sm:mt-0">
          <motion.div
            className="text-lg text-purple-400 hover:text-pink-400 transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/home">Home</Link>
          </motion.div>
          {!token && location.pathname !== '/home' && (
            <>
              <motion.div
                className="text-lg text-purple-400 hover:text-pink-400 transition-colors duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/login">Login</Link>
              </motion.div>
              <motion.div
                className="text-lg text-purple-400 hover:text-pink-400 transition-colors duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/signup">Signup</Link>
              </motion.div>
            </>
          )}
          {token && (
            <motion.div
              className="text-lg text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>Logged In</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
