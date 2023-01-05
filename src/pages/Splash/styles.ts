import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222634;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 300px;
  height: 120px;
`;
