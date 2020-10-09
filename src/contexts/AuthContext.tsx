import React from 'react'
import api from '../services/api'
import Cookies from 'js-cookie'

interface IUser {
  name: string
  email: string
}

interface IAuthContextProps {
  isAuthenticated: boolean
  user: IUser | null
  loading: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = React.createContext<IAuthContextProps>(
  {} as IAuthContextProps
)

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContextProps => {
  return React.useContext(AuthContext)
}

export function useProvideAuth(): IAuthContextProps {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')
      const user = Cookies.get('user')
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`
        if (user) setUser(JSON.parse(user))
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      const {
        data: { user, token }
      } = await api.post('sessions', {
        email,
        password
      })
      Cookies.set('token', token, { expires: 60 })
      Cookies.set('user', user, { expires: 60 })
      api.defaults.headers.Authorization = `Bearer ${token}`
      setUser(user)
      setLoading(false)
    },
    []
  )

  const logout = React.useCallback(() => {
    setUser(null)
    delete api.defaults.headers.Authorization
  }, [])

  return {
    isAuthenticated: !!user,
    user,
    loading,
    login,
    logout
  }
}

export default AuthProvider
