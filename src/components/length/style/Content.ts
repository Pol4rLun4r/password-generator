import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const Content = styled.div`
    width: 100%;
    background-color: rgba(90, 90, 90, 0.25);
    border-radius: 5px;
    padding: 0px 14px;

    margin-top: 15px;

    display: flex;
    align-items: center;
    flex-direction: row;

    justify-content: space-between;

    @media ${device.mobileS}{
        height: 55px;
    }

    @media ${device.myMobile}{
        height: 70px;
    }
    
    @media ${device.tablet}{
        height: 50px;
    }

    div{
        font-size: 24px;
    }
`

export default Content;