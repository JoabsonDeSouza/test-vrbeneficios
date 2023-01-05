import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { GetCards } from '../services/api';
import { Pokemon } from '../models/Pokemon';
import { AppReactProps } from './types';

interface AppContextData {
  pokemons: Pokemon[];
  textFilter: string;
  setTextFilter: (value: string) => void;
  getCards(): Promise<void>;
  loading: boolean;
}

interface AppState {
  pokemons: Pokemon[];
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const PokemonProvider = ({ children }: AppReactProps) => {
  const [originalList, setOriginalList] = useState<AppState>({} as AppState);
  const [data, setData] = useState<AppState>({} as AppState);
  const [loading, setLoading] = useState(true);
  const [textFilter, setTextFilter] = useState<string>('');

  async function loadStorageData(): Promise<void> {
    const pokemons = await AsyncStorage.getItem('@pokemons');

    if (pokemons) {
      const list: Pokemon[] = JSON.parse(pokemons);
      list.sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name));
      setData({ pokemons: list });
      setOriginalList({ pokemons: list });
      setLoading(false);
    } else {
      await getCards();
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  const getCards = useCallback(async () => {
    const response = await GetCards();

    const { cards } = response.data;
    cards.sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name));

    await AsyncStorage.setItem('@pokemons', JSON.stringify(cards));
    setData({ pokemons: cards });
    setOriginalList({ pokemons: cards });

    setLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        pokemons: data.pokemons,
        getCards,
        loading,
        textFilter,
        setTextFilter,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AuthProvider');
  }

  return context;
}

export { PokemonProvider, useApp };
