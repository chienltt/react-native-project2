import React, {useState} from "react";
import AppContext from "./AppContext";
import StackRouter from "./StackRouter";
import TabRouter from "./TabRouter";

const AppProvider = (props)=>{
    const [searchValue,setSearchValue] = useState(null)
    const [selectedFilm,setSelectedFilm]=useState(null)
    return(
        <AppContext.Provider //this is context API , it equivalent to redux
            value={{
                searchValue,
                setSearchValue,
                setSelectedFilm,
                selectedFilm
            }}
        >
            <TabRouter/>
        </AppContext.Provider>
    )
}
export default AppProvider
