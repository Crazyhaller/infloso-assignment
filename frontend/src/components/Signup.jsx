import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../redux/userSlice'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import { signupValidationSchema } from '../utils/validationSchemas'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.user)

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(
        signupUser({
          username: values.username,
          email: values.email,
          password: values.password,
        })
      )
      if (!result.error) {
        toast.success(
          `Welcome to MelodyVerse, ${values.username}! A welcome email has been sent.`
        )
        navigate('/login')
      } else {
        toast.error('Signup failed. Please try again.')
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
        className="bg-gray-900 p-6 rounded-lg shadow-2xl w-full max-w-md border-4 border-pink-500 transform hover:scale-105 transition-transform duration-300"
        onSubmit={formik.handleSubmit}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-extrabold mb-4 text-pink-400 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Signup
        </motion.h2>

        <div className="grid grid-cols-1 gap-4">
          <InputField
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="username"
            type="text"
            className={`border-2 border-pink-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 ${
              formik.touched.username && formik.errors.username
                ? 'border-red-500'
                : ''
            }`}
            placeholder="Enter your username"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-400 mt-1">{formik.errors.username}</p>
          )}

          <InputField
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            type="email"
            className={`border-2 border-pink-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : ''
            }`}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 mt-1">{formik.errors.email}</p>
          )}

          <div className="relative">
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
            <p className="text-red-400 mt-1">{formik.errors.password}</p>
          )}

          <div className="relative">
            <InputField
              label="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              className={`border-2 border-pink-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border-red-500'
                  : ''
              }`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ${
                showConfirmPassword
                  ? 'text-purple-400 hover:text-purple-300'
                  : 'text-pink-400 hover:text-pink-300'
              }`}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-400 mt-1">{formik.errors.confirmPassword}</p>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mr-2 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="terms" className="text-pink-400">
              I accept the{' '}
              <span className="text-purple-400 hover:text-pink-400">
                terms and conditions
              </span>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <p className="text-red-400 mt-1">{formik.errors.terms}</p>
          )}
        </div>

        <motion.button
          className="bg-pink-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-purple-500 transition-colors duration-300"
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Signing up...' : 'Signup'}
        </motion.button>

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="/login" className="text-purple-400 hover:text-pink-400">
            Login Instead
          </a>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Signup
