import React, { createContext, useState, ReactNode } from 'react';

interface CategoryContextProps {
  category: string;
  setCategory: (category: string) => void;
}

export const CategoryContext = createContext<CategoryContextProps | null>(null);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = useState('');

  return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>
};
