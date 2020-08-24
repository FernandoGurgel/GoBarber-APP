import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  ${Platform.OS !== 'android' ? 'width: 100%' : ''};
`

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`
