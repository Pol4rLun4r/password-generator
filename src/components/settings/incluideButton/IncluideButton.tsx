// style
import Container from "./style/Container"
import Text from "./style/Text"

// components
import Button from "./button/Button"

// context
import useData from "../../../hooks/useData"
import { useEffect, useState } from "react"

interface IIncluide {
    Incluide: string
}

const IncluideButton = ({ Incluide }: IIncluide) => {
    const { lowercase, uppercase, number, symbol } = useData();
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        if (Incluide === 'lowercase') setIsOn(lowercase);
        if (Incluide === 'uppercase') setIsOn(uppercase);
        if (Incluide === 'number') setIsOn(number);
        if (Incluide === 'symbol') setIsOn(symbol);
    }, [lowercase, uppercase, number, symbol])

    return (
        <Container IsIncluide={Incluide}>
            <Text
                animate={{ color: isOn? '#FFFFFF': '#646464' }}
            >
                Incluide {Incluide}
            </Text>
            <Button isIncluide={Incluide} />
        </Container>
    )
}

export default IncluideButton