import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Pokemon } from '../../models/Pokemon';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222634;
  justify-content: center;
`;

export const Text = styled.Text``;

export const List = styled(
  Animated.FlatList as new () => Animated.FlatList<Pokemon>,
)``;
