import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from 'react';

const CopyedStyle = styled(motion.div)`
    padding: 8px 12px;
    border-radius: 5px;

    background-color: white;
    color: black;
    font-size: 13px;

    position: absolute;
    bottom: -40px;
`

interface ICopyed {
    children: ReactNode;
}

const Copyed = ({ children }: ICopyed) => {
    return (
        <CopyedStyle
            key={"Copyed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                ease: "linear",
                duration: 0.3,
            }}

        >
            {children}
        </CopyedStyle>
    )
}

export default Copyed;