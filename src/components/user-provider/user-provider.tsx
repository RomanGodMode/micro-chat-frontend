import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react"

export type User = {
  userName: string | undefined,
  setUserName: (Dispatch<SetStateAction<string | undefined>>) | undefined
}

export const userContext = createContext<User>({ userName: undefined, setUserName: undefined })


const UserProvider: FC = ({ children }) => {
  const [userName, setUserName] = useState<string | undefined>(undefined)

  return <userContext.Provider value={{ userName, setUserName }}>
    {children}
  </userContext.Provider>
}

export default UserProvider