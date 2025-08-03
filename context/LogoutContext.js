// src/context/LogoutContext.js
import { createContext } from 'react';

export const LogoutContext = createContext({
  logout: () => {}, // função padrão vazia
});
