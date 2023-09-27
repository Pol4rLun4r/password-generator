import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useRandom from "./useRandom";

// style
import Glitch from "./Glitch";
import Container from "./style/Container";
import Content from "./style/Content";
import CopyIcon from "./style/CopyIcon";
import Copyed from "./style/Copyed";

const CopyPassword = () => {

    const [isCopy, setIsCopy] = useState(false);

    const copy = () => {
        console.log(useRandom({ length: 31, lowercase: true, numbers: true, symbols: true, uppercase: true }));

        navigator.clipboard.writeText(password);
        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false)
        }, 1000)
    }

    const password = "8d2hda92jd0"

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