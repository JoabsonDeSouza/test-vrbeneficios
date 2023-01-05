import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222634;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Details = styled.ScrollView`
  position: absolute;
  width: 100%;
  height: 48%;
  padding: 15px;
  bottom: 0;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color || '#ffffff'};
  font-size: ${({ size }) => size || 20}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  margin: 50px 10px 20px 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const FloatButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  top: 40px;
  left: 15px;
  position: absolute;
  background-color: #fff;
  z-index: 100;
`;

export const Icon = styled(FeatherIcon)`
  color: #222634;
`;
