import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 14px;

    border: solid 2px rgba(90, 90, 90, 0.44);
    border-radius: 5px;

    cursor: pointer;

    @media ${device.mobileS}{
        width: 100%;
        height: 70px;
    }

    @media ${device.tablet}{
        width: 100%;
        height: 50px;
    }
`

export default Content;