import React from 'react'
import { Image } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.png'
import { Container, Title } from './styles'

const SingIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title> Faça seu logon</Title>
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
  )
}
export default SingIn
