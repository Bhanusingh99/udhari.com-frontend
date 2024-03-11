import { createContext } from "react";

const userContext = createContext({
    userInfo:{
    selectedCustomerId:"",
    userId:""
}})

export default userContext