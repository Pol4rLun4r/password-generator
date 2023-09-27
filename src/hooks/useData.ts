import { useContext } from "react";
import DataContext from "../context/data";

const useData = () => { 
    return useContext(DataContext);
}

export default useData;