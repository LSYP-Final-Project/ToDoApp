import styled from "styled-components";

const StyledAddButton = styled.button`
    box-sizing: border-box;

    position: relative;
    width: 150px;
    height: 40px;
    background-color: #0D6EFD;
    border: 2px solid #0D6EFD;

    .plusSignWrapper{
        position: absolute;
        top: -2px;
        left: -2px;
        width: 50px;
        height: 40px;
        border: 1px solid #0D6EFD;
        background-color: #0D6EFD;
    }

    &:hover{
        opacity: 0.8;
    }

    p{  
        color: white;
        font-weight: 700;
        font-size: 15px;
        margin-left: 35px;
        margin-top: 5px;
    }

    .plusSign{
        width: 20px;
        height: 7.5px;
        background-color: white;
        position: absolute;
        top: 15px;
        left: 9px;
        z-index: 2;

        &::after{
            content: '';
            position: absolute;
            width: 7.5px;
            height: 20px;
            background-color: white;
            top: -6.5px;
            left: 6.5px;
        }
    }
`

export default StyledAddButton
