import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// style
import Glitch from "./Glitch";
import Container from "./style/Container";
import Content from "./style/Content";
import CopyIcon from "./style/CopyIcon";
import Copyed from "./style/Copyed";

//context
import useData from "../../hooks/useData";

const CopyPassword = () => {
    const { generatePassword } = useData();

    const [isCopy, setIsCopy] = useState(false);

    const copy = () => {
        setIsCopy(true);
        
        navigator.clipboard.writeText(password);
        
        setTimeout(() => {
            setIsCopy(false)
        }, 1000)
    }

    const password = generatePassword;

    return (
        <Container>
            <Content onClick={() => copy()}>
                <Glitch Password={password} />
                <CopyIcon />
            </Content>

            <AnimatePresence>
                {isCopy && (
                    <Copyed>Copyed!</Copyed>
                )}
            </AnimatePresence>
        </Container>
    )
}

export default CopyPassword