import React, { createContext, useContext, useState } from "react";
import { FOOTER, INDIA_PAGE, INDUSTRIES, SERVICES } from "../data/content";

const PersonalizationContext = createContext();

export const PersonalizationProvider = ({ children }) => {
  const [content, setContent] = useState({
    india: INDIA_PAGE,
    industries: INDUSTRIES,
    services: SERVICES,
    footer: FOOTER,
  });

  return (
    <PersonalizationContext.Provider value={{ content, setContent }}>
      {children}
    </PersonalizationContext.Provider>
  );
};

export const usePersonalization = () => {
  return useContext(PersonalizationContext);
};
