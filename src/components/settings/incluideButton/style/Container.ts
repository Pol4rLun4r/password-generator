import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

interface IContainer {
    IsIncluide: string
}

const Container = styled.div`
    width: 100%;
    background-color: rgba(90, 90, 90, 0.25);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: capitalize;

    @media ${device.mobileS}{
        margin-top: ${({ IsIncluide }: IContainer) => IsIncluide === 'lowercase' ? '15px' : '10px'};
        height: 55px;
        padding: 0px 8px;
    }

    @media ${device.myMobile}{
        margin-top: ${({ IsIncluide }: IContainer) => IsIncluide === 'lowercase' ? '15px' : '20px'};
        height: 70px;
        padding: 0px 14px;
    }

    @media ${device.tablet}{
        margin-top: ${({ IsIncluide }: IContainer) => IsIncluide === 'lowercase' ? '15px' : '10px'};
        height: 50px;
    }
`

export default Container;