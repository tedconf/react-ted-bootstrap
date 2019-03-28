import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  // @ts-ignore
  onChange: (value: string) => {},
  listOpen: false,
});

export { Provider, Consumer };
