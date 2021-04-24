import { userContext } from "../../components/user-provider/user-provider"
import { useContext } from "react"

export const useUser = () => useContext(userContext)