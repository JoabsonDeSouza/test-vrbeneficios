import React from 'react';
import { Attack } from '../../../models/Pokemon';
import {
  Text,
  ContainerTexts,
  Card,
  View,
  CostView,
} from './styles';

interface CardDetailProps {
  item: Attack
}

const CardDetail = ({item}: CardDetailProps) => {
  return (
    <Card>
              <View />
              <ContainerTexts>
                <Text bold>Energia: </Text>
                {item.cost.map((cost, index) => (
                  <CostView key={index.toString()}>
                    <Text>{`${cost}`}</Text>
                    {index < item.cost.length - 1 ? <Text>, </Text> : null}
                  </CostView>
                ))}
              </ContainerTexts>
              <ContainerTexts>
                <Text bold>Nome: </Text>
                <Text>{item.name}</Text>
              </ContainerTexts>
              <ContainerTexts>
                <Text bold>Descrição: </Text>
                <Text>{item.text}</Text>
              </ContainerTexts>
              <ContainerTexts>
                <Text bold>Dano: </Text>
                <Text>{item.damage}</Text>
              </ContainerTexts>
              <ContainerTexts>
                <Text bold>Custo de Energia Convertida: </Text>
                <Text>{item.convertedEnergyCost}</Text>
              </ContainerTexts>
            </Card>
  );
};

export default CardDetail;
