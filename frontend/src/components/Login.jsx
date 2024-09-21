import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import InputField from './InputField'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { loginValidationSchema } from '../utils/validationSchemas'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.user)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(loginUser({ ...values, rememberMe }))
      if (!result.error) {
        toast.success(
          `Welcome to MelodyVerse! You have successfully logged in.`
        )
        navigate('/home')
      } else {
        toast.error('Login failed. Please try again.')
      }
    },
  })

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-900 via-black to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        className="bg-gray-900 p-8 rounded-lg shadow-2xl w-80 border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300"
        onSubmit={formik.handleSubmit}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-pink-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Login
        </motion.h2>

        <InputField
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          className={`border-2 border-pink-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 ${
            formik.touched.email && formik.errors.email ? 'border-red-500' : ''
          }`}
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-400 mt-2">{formik.errors.email}</p>
        )}

        <div className="relative mt-4">
          <InputField
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            type={showPassword ? 'text' : 'password'}
            className={`border-2 border-pink-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 ${
              formik.touched.password && formik.errors.password
                ? 'border-red-500'
                : ''
            }`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ${
              showPassword
                ? 'text-purple-400 hover:text-purple-300'
                : 'text-pink-400 hover:text-pink-300'
            }`}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-400 mt-2">{formik.errors.password}</p>
        )}

        <div className="flex justify-between items-center mt-6">
          <label className="flex items-center text-pink-400">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 text-purple-500 focus:ring-purple-500"
            />
            Remember Me
          </label>
          <p className="text-purple-400 text-sm hover:text-pink-400">
            Forgot Password?
          </p>
        </div>

        <motion.button
          className="bg-pink-500 text-white px-4 py-2 rounded mt-6 w-full hover:bg-purple-500 transition-colors duration-300"
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </motion.button>

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="/signup" className="text-purple-400 hover:text-pink-400">
            Register New User
          </a>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Login
