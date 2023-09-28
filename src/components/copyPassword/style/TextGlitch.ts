import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const TextGlitch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span{
        height: 100%;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media ${device.mobileS}{
        width: 90%;
        height: 30px;
        font-size: 25px;
    }

    @media ${device.tablet}{
        width: 90%;
        height: 25px;
        font-size: 20px;
    }
`

export default TextGlitch;