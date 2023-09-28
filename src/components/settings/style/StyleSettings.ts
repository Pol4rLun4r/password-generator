import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const StyleSettings = styled.div`
    color: #939393;

    @media ${device.mobileS}{
        font-size: 18px;
    }

    @media ${device.myMobile}{
        font-size: 24px;
    }
    
    @media ${device.tablet}{
        font-size: 13px;
    }
`

export default StyleSettings;