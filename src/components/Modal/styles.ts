import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { Attack } from '../../models/Pokemon';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: green;
`;

export const View = styled.View`
  align-self: center;
  width: 30%;
  height: 5px;
  border-radius: 20px;
  background-color: #222634;
  margin-bottom: 10px;
`;

export const LayoutClose = styled.TouchableOpacity`
  flex: 1;
`;

export const Card = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  padding: 15px 20px 25px 20px;
  height: 100%;
  width: ${width}px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
}

export const ContainerTexts = styled.View`
  flex-direction: row;
  margin-top: 10px;
  width: 80%;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color || '#222634'};
  font-size: ${({ size }) => size || 20}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const List = styled(FlatList as new () => FlatList<Attack>)`
  height: ${height / 3}px;
  position: absolute;
  bottom: 0;
`;

export const Paginated = styled.View`
  position: absolute;
  bottom: 30px;
  width: ${width}px;
  height: 20px;
  z-index: 100;
`;

export const CostView = styled.View`
  flex-direction: row;
`;
