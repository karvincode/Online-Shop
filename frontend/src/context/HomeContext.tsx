import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CategoryContextProps {
  category: string;
  setCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const CategoryContext = createContext<CategoryContextProps >({category: "", setCategory: (category: string)=>{},searchTerm: "",setSearchTerm:(searchterm:string)=>{}});

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");

  return <CategoryContext.Provider value={{ category, setCategory, searchTerm, setSearchTerm}}>{children}</CategoryContext.Provider>
};