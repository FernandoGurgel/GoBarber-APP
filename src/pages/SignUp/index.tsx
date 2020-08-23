import React, { useRef, useCallback } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import api from '../../services/api'
import GetValidationErrors from '../../utils/getValidationErrors'
import Button from '../../components/Button'
import Input from '../../components/Input'
import logoImg from '../../assets/logo.png'
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles'

interface ISignInFormData {
  email: string
  password: string
  name: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const handleSignUp = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      })
      await schema.validate(data, { abortEarly: false })

      await api.post('/users', data)
      console.log(data)

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Confirme o cadastro acessando seu email.',
      )

      navigation.goBack()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = GetValidationErrors(error)
        formRef.current?.setErrors(errors)
        Alert.alert(
          'Error na autenticação',
          'Ocorreu um erro ao fazer cadastro.',
        )
      }
    }
  }, [])

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
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCorrect={true}
                name="name"
                icon="user"
                placeholder="Name"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                secureTextEntry
                returnKeyType="send"
                returnKeyLabel="Enviar"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm()
                }}
              >
                Entrar
              </Button>
            </Form>
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
