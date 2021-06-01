import styled from 'styled-components';

const StyledOngoingSprint = styled.div`
    box-sizing: border-box;

    position: relative;
    width: 199px;
    height: 50px;
    background-color: #f2b5b5;
    border: 1px solid #F79696;
    text-align: center;
    padding-top: 10px;
    color: white;
    font-weight: 700;
    cursor: pointer;

    margin-bottom: 2.5px;

    &::after{
        content: '';
        position: absolute;
        top:-1px;
        left: -2px;
        width: 30px;
        height: 50px;
        border: 5px solid #F79696;
        background-color: lightgrey;
    }

    &:hover{
        ::after{
            background-color: #F79696;
        }
    }

    z-index: 10;
`

export default StyledOngoingSprint