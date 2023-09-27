import { ReactNode, createContext, useState } from "react";

interface IDataProv {
    children: ReactNode
}

interface IDataContext {
    length: string,
    setLength: React.Dispatch<React.SetStateAction<string>>
}

const IDataContextState = {
    length: '',
    setLength: () => '',
}

const DataContext = createContext<IDataContext>(IDataContextState);

export const DataProvider = ({ children }: IDataProv) => {
    const [length, setLength] = useState('18');

    return (
        <DataContext.Provider value={{ length, setLength }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;