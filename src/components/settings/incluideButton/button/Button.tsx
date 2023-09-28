import { useState } from "react"

//style
import { Container, Toggle } from "./style/Toggle"

// context
import useData from "../../../../hooks/useData";

interface IIncluide {
    isIncluide: string
}

const Button = ({ isIncluide }: IIncluide) => {
    const { setLowercase, setNumber, setSymbol, setUppercase } = useData();
    const [isValid, setIsValid] = useState(false);

    const handleToggle = () => {
        setIsValid(!isValid)

        if (isIncluide === 'lowercase') setLowercase(!isValid);
        if (isIncluide === 'uppercase') setUppercase(!isValid);
        if (isIncluide === 'number') setNumber(!isValid);
        if (isIncluide === 'symbol') setSymbol(!isValid);
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return (
        <Container
            isvalid={isValid}
            onClick={() => handleToggle()}

            animate={{ background: isValid ? '#CACACA' : '#606060' }}
            initial={{ background: '#606060' }}
        >
            <Toggle layout transition={spring} />
        </Container>
    )
}

export default Button