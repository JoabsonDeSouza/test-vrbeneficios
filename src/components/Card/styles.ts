import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const ITEM_WIDTH = width - 120;
export const ITEM_HEIGHT = height / 2;

interface CardProps {
  marginLeft: boolean;
  marginRight: boolean;
}

const marginValue = (width - ITEM_WIDTH) / 2;

export const Card = styled(Animated.View)<CardProps>`
  margin-left: ${(props) => (props.marginLeft ? marginValue : 0)}px;
  margin-right: ${(props) => (props.marginRight ? marginValue : 0)}px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  overflow: hidden;
  align-self: center;
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
`;

export const BackgroundImage = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  border-radius: 6px;
`;

export const Image = styled(Animated.Image).attrs({
  resizeMode: 'stretch',
})`
  flex: 1;
  width: 100%;
  height: 70%;
  border-radius: 6px;
`;

export const ContainerDetails = styled.View`
  background-color: #00000090;
  margin-top: 10px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  justify-content: center;
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
`;

interface TextProps {
  bold?: boolean;
}

export const Text = styled.Text<TextProps>`
  color: #fff;
  padding-top: 10px;
  font-size: 20px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
