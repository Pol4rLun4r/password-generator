import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const Container = styled.div`
    background-color: transparent;

    border: 2px solid white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    @media ${device.mobileS}{
        font-size: 18px;
        width: 90%;
        height: 60px;
    }

    @media ${device.myMobile}{
        height: 65px;
        font-size: 24px;
    }

    @media ${device.tablet}{
        margin-top: 20px;

        width: 70%;
        height: 50px;

        font-size: 16px;
    }
`

export default Container;