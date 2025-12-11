import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/store";
import { toast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user storage (in production, this would be backend)
const USERS_KEY = "azure-users";
const CURRENT_USER_KEY = "azure-current-user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const getUsers = (): Record<string, { user: User; password: string }> => {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : {};
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = getUsers();
    const userData = users[email.toLowerCase()];

    if (!userData) {
      toast({
        title: "Login Failed",
        description: "No account found with this email",
        variant: "destructive",
      });
      return false;
    }

    if (userData.password !== password) {
      toast({
        title: "Login Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
      return false;
    }

    setUser(userData.user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData.user));
    toast({
      title: "Welcome Back!",
      description: `Signed in as ${userData.user.name}`,
    });
    return true;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = getUsers();
    const emailLower = email.toLowerCase();

    if (users[emailLower]) {
      toast({
        title: "Registration Failed",
        description: "An account with this email already exists",
        variant: "destructive",
      });
      return false;
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email: emailLower,
      name,
    };

    users[emailLower] = { user: newUser, password };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    toast({
      title: "Account Created!",
      description: `Welcome to Azure Porcelain, ${name}`,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
    toast({
      title: "Signed Out",
      description: "Come back soon!",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
