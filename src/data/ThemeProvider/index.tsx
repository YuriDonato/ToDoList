import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextType {
  // useStates
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType>({
  currentTheme: "default",
  setCurrentTheme: () => {
    // set current theme
  },
});

// Provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState("default");

  return (
    <AuthContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
