import React, { useEffect, useMemo, useState } from 'react';
import { Animated, ListRenderItem } from 'react-native';
import Card from '../../components/Card';
import { ITEM_WIDTH } from '../../components/Card/styles';

import { useApp } from '../../context/app';

import { Container, List } from './styles';
import Header from './Header';
import { Pokemon } from '../../models/Pokemon';
import useDebounce from '../../hooks/useDebounce';

const Home: React.FC = () => {
  const { pokemons, textFilter } = useApp();

  const [scrollX] = useState(new Animated.Value(0));

  const debouncedKeyword = useDebounce(textFilter || '', 500);

  const searchPokemon = useMemo(() => {
    if (!debouncedKeyword) return pokemons;

    return pokemons.filter(
      (item) =>
        item &&
        item.name.toLowerCase().includes(debouncedKeyword.toLowerCase()),
    );
  }, [pokemons, debouncedKeyword]);

  const renderItem: ListRenderItem<Pokemon> = ({ item, index }) => (
    <Card
      item={item}
      position={index}
      scrollX={scrollX}
      listSize={searchPokemon.length}
    />
  );

  return (
    <Container>
      <Header />
      <List
        horizontal
        data={searchPokemon || []}
        keyExtractor={(item: { id: string }) => `${item.id}`}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0.2}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
      />
    </Container>
  );
};

export default Home;
