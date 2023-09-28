import useData from "../../hooks/useData"
import useRandom from "../../hooks/useRandom"

//style
import Container from "./style/Container"

const GeneratePassword = () => {
    const { length, lowercase, uppercase, number, symbol, setGeneratePassword } = useData();

    const handleGenerate = () => {
        setGeneratePassword(useRandom({length, lowercase, uppercase, number, symbol}));
    }

    return (
        <Container onClick={() => handleGenerate()}>
            Generate Password
        </Container>
    )
}

export default GeneratePassword