import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// style
import Container from "./style/Container";
import Content from "./style/Content";
import CopyIcon from "./style/CopyIcon";
import Copyed from "./style/Copyed";

const CopyPassword = () => {

    const [isCopy, setIsCopy] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(password);
        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false)
        }, 1000)
    }

    const password = "CopyPassword"

    return (
        <Container>
            <Content onClick={() => copy()}>
                {password}
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