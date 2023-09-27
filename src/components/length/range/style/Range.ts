import styled from "styled-components";

const StyleRange = styled.input.attrs({ type: "range", min: "4", max: "32", defaultValue: "18" })`
    appearance: none;
    width: 80%;
    height: 8px;
    border-radius: 5px;
    outline: none;
    background: #565555;

    user-select: none;

    &::-webkit-slider-thumb {
        appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.20);

        cursor: pointer;
        outline: none;
    }
`

export default StyleRange