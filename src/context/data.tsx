import { ReactNode, createContext, useState } from "react";

interface IDataProv {
    children: ReactNode
}

interface IDataContext {
    length: string
    setLength: React.Dispatch<React.SetStateAction<string>>
    lowercase: boolean
    setLowercase: React.Dispatch<React.SetStateAction<boolean>>
    uppercase: boolean
    setUppercase: React.Dispatch<React.SetStateAction<boolean>>
    number: boolean
    setNumber: React.Dispatch<React.SetStateAction<boolean>>
    symbol: boolean
    setSymbol: React.Dispatch<React.SetStateAction<boolean>>
    generatePassword: string
    setGeneratePassword: React.Dispatch<React.SetStateAction<string>>
}

const IDataContextState = {
    length: '',
    setLength: () => '',
    lowercase: false,
    setLowercase: () => false,
    uppercase: false,
    setUppercase: () => false,
    number: false,
    setNumber: () => false,
    symbol: false,
    setSymbol: () => false,
    generatePassword: '',
    setGeneratePassword: () => '',

}

const DataContext = createContext<IDataContext>(IDataContextState);

export const DataProvider = ({ children }: IDataProv) => {
    const [length, setLength] = useState('18');
    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [generatePassword, setGeneratePassword] = useState('Password Generate');

    return (
        <DataContext.Provider value={{ length, setLength, lowercase, setLowercase, number, setNumber, uppercase, setUppercase, symbol, setSymbol, generatePassword, setGeneratePassword }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;