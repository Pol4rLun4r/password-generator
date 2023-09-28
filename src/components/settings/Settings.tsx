import StyleSettings from "./style/StyleSettings"
import Container from "./style/Container"

//components
import IncluideButton from "./incluideButton/IncluideButton"

const Settings = () => {
    return (
        <Container>
            <StyleSettings>Settings</StyleSettings>
            <IncluideButton Incluide="lowercase"/>
            <IncluideButton Incluide="uppercase"/>
            <IncluideButton Incluide="number"/>
            <IncluideButton Incluide="symbol"/>
        </Container>
    )
}

export default Settings