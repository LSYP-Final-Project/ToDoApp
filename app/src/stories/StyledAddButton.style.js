import styled from "styled-components";

const StyledAddButton = styled.button`
    $background-color: #0D6EFD;

    box-sizing: border-box;

    position: relative;
    width: 150px;
    height: 40px;
    background-color: $background-color;
    border: 1px solid $background-color;

    .plusSignWrapper{
        position: absolute;
        top: -2px;
        left: -2px;
        width: 50px;
        height: 38px;
        border: 1px solid $background-color;
        background-color: $background-color;
    }

    &:hover{
        opacity: 0.8;
    }

    p{  
        font-weight: 700;
        font-size: 15px;
        margin-left: 35px;
        margin-top: 7.5px;
    }

    .plusSign{
        width: 20px;
        height: 7.5px;
        position: absolute;
        top: 15px;
        left: 9px;
        z-index: 2;

        &::after{
            content: '';
            position: absolute;
            width: 7.5px;
            height: 20px;
            top: -6.5px;
            left: 6.5px;
        }
    }

    p.storybook-styled-add-btn--primary{
        color: white;
    }

    p.storybook-styled-add-btn--secondary{
        color: #82c0ff;
    }

    .plusSign.storybook-styled-add-btn--primary{
        background-color: white;

        &::after{
            background-color: white;
        }
    }
    .plusSign.storybook-styled-add-btn--secondary{
        background-color: #82c0ff;
        &::after{
            background-color: #82c0ff;
        }
    }
`

export default StyledAddButton
