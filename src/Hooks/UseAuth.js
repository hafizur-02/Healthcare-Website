import { useContext } from "react"
import { MyContext } from "../Context/AuthProvider"

const UseAuth = () => {
    return useContext(MyContext) ;
}

export default UseAuth ;