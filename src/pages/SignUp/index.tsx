import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.png'
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  return (
    <>
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          // contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title> Crie seua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Name" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('Ok')
              }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => navigation.navigate('SingIn')}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInButtonText>Volta para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  )
}
export default SignUp
