import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const StyleRange = styled.input.attrs({ type: "range", min: "4", max: "32", defaultValue: "18" })`
    appearance: none;
    border-radius: 5px;
    outline: none;
    background: #565555;

    &::-webkit-slider-thumb {
        appearance: none;
        border-radius: 100%;
        background: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.80);

        cursor: pointer;
        outline: none;
    }

    @media ${device.mobileS}{
        width: 75%;
        height: 15px;

        &::-webkit-slider-thumb {
            height: 25px;
            width: 25px;
        }
    }

    @media ${device.myMobile}{
        width: 78%;
    }

    @media ${device.tablet}{
        width: 80%;
        height: 8px;

        &::-webkit-slider-thumb {
            height: 15px;
            width: 15px;
        }
    }
`

export default StyleRange