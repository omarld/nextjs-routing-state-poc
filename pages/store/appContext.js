import React, {useState, useContext, createContext} from 'react';

/**
 * Provider Exports
 */

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider ({children}) {
  const app = useAppProvider();
  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}

/**
 * App Provider Function Definition
 */

function useAppProvider() {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  
  return {
    name,
    emailAddress,
    setName,
    setEmailAddress
  }
}