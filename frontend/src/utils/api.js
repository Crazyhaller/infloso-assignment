import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    'https://infloso-assignment.onrender.com/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
