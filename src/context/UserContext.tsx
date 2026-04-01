// context API chua state global: user

import { createContext, useState } from "react";

type User = {
  name: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>({ name: "hoadv" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};