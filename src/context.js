import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";

const GlobalContext = createContext({
  state: {
    articles: [],
    isMenuOpen: false,
    isSearchOpen: false,
  },
  menuToggle: () => {},
  searchToggle: () => {},
  updateArticles: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

function AppProvider({ children }) {
  const [state, setState] = useState({
    articles: [],
    isMenuOpen: false,
    isSearchOpen: false,
  });

  const updateArticles = useCallback((data) => {
    setState((prevState) => {
      return { ...prevState, articles: data };
    });
  }, []);

  const menuToggle = useCallback(() => {
    setState((prevState) => {
      return { ...prevState, isMenuOpen: !prevState.isMenuOpen };
    });
  }, []);

  const searchToggle = useCallback(() => {
    setState((prevState) => {
      return { ...prevState, isSearchOpen: !prevState.isSearchOpen };
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      menuToggle,
      searchToggle,
      updateArticles,
    }),
    [state, menuToggle, searchToggle, updateArticles]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export { AppProvider };
