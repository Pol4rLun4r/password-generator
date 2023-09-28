import styled from "styled-components";
import { motion } from "framer-motion";

interface IContainer {
    isvalid: boolean
}

const Container = styled(motion.div)`
    width: 42px;
    height: 22px;

    padding: 4px;

    border-radius: 22px;
    background: #606060;

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ isvalid }: IContainer) => isvalid ? 'flex-end' : 'flex-start'};

    cursor: pointer;
`

const Toggle = styled(motion.div)`
    width: 16px;
    height: 16px;

    border-radius: 100%;
    background: #FFF;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.70)
`

export { Container, Toggle }