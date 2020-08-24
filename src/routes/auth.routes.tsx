import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SingIn from '../pages/SignIn'
import SingUp from '../pages/SignUp'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    // initialRouteName="SingUp"
  >
    <Auth.Screen name="SingIn" component={SingIn} />
    <Auth.Screen name="SingUp" component={SingUp} />
  </Auth.Navigator>
)

export default AuthRoutes
