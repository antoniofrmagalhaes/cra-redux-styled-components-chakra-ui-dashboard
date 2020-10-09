import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import AuthLayout from '../pages/_layouts/AuthLayout'

import DefaultLayout from '../pages/_layouts/DefaultLayout'
import { store } from '../store'

interface IRouteProps extends RouteProps {
  component: any
  isPrivate?: true
}

const RouteWrapper: React.FC<IRouteProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { isAuthenticated } = store.getState().authentication

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/login" />
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/" />
  }

  const Layout = isAuthenticated ? DefaultLayout : AuthLayout
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default RouteWrapper
