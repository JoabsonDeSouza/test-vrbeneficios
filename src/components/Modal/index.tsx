import React, { useState, useRef } from 'react';
import { Modal as ModalView, ListRenderItem } from 'react-native';
import Dots from 'react-native-dots-pagination';
import { Attack, Pokemon } from '../../models/Pokemon';
import CardDetail from './CardDetail';

import { Container, List, LayoutClose, Paginated } from './styles';

interface ModalProps {
  show: boolean;
  attacks: Attack[];
  onPress(): void;
}

const Modal: React.FC<ModalProps> = ({ show, attacks, onPress }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    const position = viewableItems[0].index;
    setCurrentPage(position);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem: ListRenderItem<Attack> = ({ item, index }) => (
    <CardDetail item={item} />
  );

  return (
    <Container>
      <ModalView animationType="slide" transparent visible={show}>
        <LayoutClose activeOpacity={1} onPress={onPress} />

        <List
          horizontal
          data={attacks}
          keyExtractor={(item: Attack, index: number) =>
            `${item.name} + ${index}`
          }
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          decelerationRate={0.2}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={renderItem}
        />
        <Paginated>
          <Dots
            length={attacks.length}
            active={currentPage}
            activeColor="#222634"
          />
        </Paginated>
      </ModalView>
    </Container>
  );
};

export default Modal;
