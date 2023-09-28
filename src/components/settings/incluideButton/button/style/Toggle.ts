import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../../../globalStyles/Devices.util";

interface IContainer {
    isvalid: boolean
}

const Container = styled(motion.div)`
    background: #606060;

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ isvalid }: IContainer) => isvalid ? 'flex-end' : 'flex-start'};

    cursor: pointer;

    @media ${device.mobileS}{
        width: 50px;
        height: 30px;

        padding: 4px;

        border-radius: 29px;
    }

    @media ${device.myMobile}{
        width: 60px;
        height: 34px;

        padding: 5px;

        border-radius: 29px;
    }

    @media ${device.tablet}{
        width: 42px;
        height: 22px;

        padding: 4px;

        border-radius: 22px;
    }
`

const Toggle = styled(motion.div)`
    @media ${device.mobileS}{
        width: 21px;
        height: 21px;
    }

    @media ${device.myMobile}{
        width: 25px;
        height: 25px;
    }

    @media ${device.tablet}{
        width: 16px;
        height: 16px;
    }

    border-radius: 100%;
    background: #FFF;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.70)
`

export { Container, Toggle };