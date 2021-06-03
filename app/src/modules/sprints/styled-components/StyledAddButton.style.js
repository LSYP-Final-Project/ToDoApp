import styled from "styled-components";

const StyledAddButton = styled.button`
    box-sizing: border-box;

    position: relative;
    width: 200px;
    height: 50px;
    background-color: #8CC9FD;
    border: 2px solid #2699FB;

    .plusSignWrapper{
        position: absolute;
        top: -2px;
        left: -2px;
        width: 50px;
        height: 50px;
        border: 1px solid #2699FB;
        background-color: #2699FB;
    }

    &:hover{
        background-color: #8BE78B;
        border-color: #2EA822;
        .plusSignWrapper{
            background-color: #2EA822;
            border-color: #2EA822;
        }
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