import React from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Card as CardItem,
  Image,
  ContainerDetails,
  ContainerTexts,
  Text,
  ITEM_WIDTH,
  BackgroundImage,
} from './styles';
import { Pokemon } from '../../models/Pokemon';

interface CardProps {
  position: number;
  scrollX: Animated.Value;
  listSize: number;
  item: Pokemon;
}

const Card: React.FC<CardProps> = ({ item, position, scrollX, listSize }) => {
  const navigation = useNavigation<any>();

  const translateY = scrollX.interpolate({
    inputRange: [
      (position - 1) * ITEM_WIDTH,
      position * ITEM_WIDTH,
      (position + 1) * ITEM_WIDTH,
    ],
    outputRange: [0.8, 1.1, 0.8],
  });

  const changeImageX = scrollX.interpolate({
    inputRange: [(position - 1) * ITEM_WIDTH, position * ITEM_WIDTH],
    outputRange: [-100, 0],
  });

  const handleNavigate = () => {
    navigation.navigate('Detail', { pokemon: item });
  };

  return (
    <CardItem
      style={{ transform: [{ scaleX: translateY }, { scaleY: translateY }] }}
      marginLeft={position === 0}
      marginRight={position === listSize - 1}>
      <BackgroundImage activeOpacity={1} onPress={handleNavigate}>
        <Image
          style={{
            transform: [{ translateX: changeImageX }],
          }}
          source={{ uri: item.imageUrl }}
        />
        <ContainerDetails>
          <ContainerTexts>
            <Text>Nome: </Text>
            <Text bold>{item.name}</Text>
          </ContainerTexts>
          <ContainerTexts>
            <Text>Id: </Text>
            <Text bold>{item.id}</Text>
          </ContainerTexts>
          <ContainerTexts>
            <Text>Tipo: </Text>

            {item.types &&
              item.types.map((type, index) => (
                <Text key={index.toString()} bold style={{ paddingBottom: 10 }}>
                  {type}
                </Text>
              ))}
          </ContainerTexts>
        </ContainerDetails>
      </BackgroundImage>
    </CardItem>
  );
};

export default Card;
