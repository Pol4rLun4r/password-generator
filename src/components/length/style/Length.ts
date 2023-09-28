import styled, { css } from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const styleSize = () => {
    return css`
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
}

const StyleLength = styled.div`
    ${styleSize()}
    margin-right: 4px;
    color: #939393;
`
const StyleLengthValue = styled.div`
    ${styleSize()}
`

const ContainerLength = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export { StyleLength, StyleLengthValue, ContainerLength };