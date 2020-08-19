import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, TextInput, Icon } from './styles'

interface IInputProps extends TextInputProps {
  name: string
  icon: string
}

const Input: React.FC<IInputProps> = ({ icon, name, ...res }) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      {...res}
    />
  </Container>
)

export default Input
