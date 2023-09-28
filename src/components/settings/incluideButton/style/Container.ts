import styled from "styled-components";

interface IContainer {
    IsIncluide: string
}

const Container = styled.div`
    margin-top: ${({ IsIncluide }: IContainer) => IsIncluide === 'lowercase' ? '15px' : '10px'};

    width: 100%;
    height: 50px;
    padding: 0px 14px;
    background-color: rgba(90, 90, 90, 0.25);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: capitalize;
`

export default Container;