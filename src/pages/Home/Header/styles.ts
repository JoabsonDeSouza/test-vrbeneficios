import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 200px;
  height: 70px;
`;

export const SearchContainer = styled.View`
  margin-top: 20px;
  width: 80%;
  border-radius: 8px;
  background-color: #00000050;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 100%;
  color: #fff;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #666360;
`;
