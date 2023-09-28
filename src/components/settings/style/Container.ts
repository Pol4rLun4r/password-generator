import styled from "styled-components";
import { device } from "../../../globalStyles/Devices.util";

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;

    @media ${device.tablet}{
        margin-top: 20px;
    }
`

export default Container;