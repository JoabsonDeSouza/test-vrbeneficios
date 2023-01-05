import axios from './baseApi';

export const GetCards = () => {
  const parameterUrl = 'v1/cards';
  return axios.get(parameterUrl);
};

export const GetCardById = (id: string) => {
  const parameterUrl = `v1/cards/${id}`;
  return axios.get(parameterUrl);
};
