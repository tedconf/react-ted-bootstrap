import { createContext } from 'react';

const { Provider, Consumer } = createContext({
  onChange: () => {},
});

export { Provider, Consumer };
