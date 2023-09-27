import styled, { css } from "styled-components";

const styleSize = () =>{
    return css`
        font-size: 13px;
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