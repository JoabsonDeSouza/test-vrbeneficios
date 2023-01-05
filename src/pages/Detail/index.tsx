import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container,
  Image,
  Details,
  Text,
  ContainerTexts,
  Button,
  FloatButton,
  Icon,
} from './styles';
import { Weakness } from '../../models/Pokemon';
import Modal from '../../components/Modal';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const { params } = useRoute();
  const { pokemon }: any = params;

  const openOrCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <FloatButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} />
      </FloatButton>
      <Container>
        <Image source={{ uri: pokemon.imageUrlHiRes }} />
        <Details>
          <Text size={30} bold>
            {pokemon.name}
          </Text>
          <ContainerTexts>
            <Text bold>ID: </Text>
            <Text>{pokemon.id}</Text>
          </ContainerTexts>

          {pokemon.text && (
            <Text style={{ marginTop: 20 }}>{pokemon.text}</Text>
          )}

          <ContainerTexts>
            <Text bold>Tipo: </Text>
            {pokemon.types &&
              pokemon.types.map((type: string, index: number) => (
                <Text key={index.toString()}>{type}</Text>
              ))}
          </ContainerTexts>

          <ContainerTexts>
            <Text bold>Resistencia: </Text>
            {pokemon.weaknesses &&
              pokemon.weaknesses.map((weaknesses: Weakness, index: number) => (
                <Text key={index.toString()}>{weaknesses.type}</Text>
              ))}
          </ContainerTexts>

          <Button onPress={openOrCloseModal}>
            <Text color="#222634" bold>
              Exibir Ataques
            </Text>
          </Button>

          {modalVisible && (
            <Modal
              show={modalVisible}
              attacks={pokemon.attacks}
              onPress={openOrCloseModal}
            />
          )}
        </Details>
      </Container>
    </Container>
  );
};

export default Detail;
