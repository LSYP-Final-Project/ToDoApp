import styled from "styled-components";

const StyledAddButton = styled.button`
    box-sizing: border-box;

    position: relative;
    width: 200px;
    height: 50px;
    background-color: #0D6EFD;
    border: 2px solid #0D6EFD;

    .plusSignWrapper{
        position: absolute;
        top: -2px;
        left: -2px;
        width: 50px;
        height: 50px;
        border: 1px solid #0D6EFD;
        background-color: #0D6EFD;
    }

    &:hover{
        opacity: 0.8;
    }

    p{  
        color: white;
        font-weight: 700;
        font-size: 20px;
        margin-left: 50px;
        margin-top: 5px;
    }

    .plusSign{
        width: 30px;
        height: 10px;
        background-color: white;
        position: absolute;
        top: 19px;
        left: 9px;
        z-index: 2;

        &::after{
            content: '';
            position: absolute;
            width: 10px;
            height: 30px;
            background-color: white;
            top: -10px;
            left: 10px;
        }
    }
`

export default StyledAddButton