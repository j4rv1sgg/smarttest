import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/state';
import { ThemeProvider } from './components/ThemeProvider';

const App: React.FC<React.PropsWithChildren<object>> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  </Provider>
);

export default App;
