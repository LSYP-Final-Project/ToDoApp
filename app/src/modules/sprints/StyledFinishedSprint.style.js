import styled from 'styled-components';

const StyledOngoingSprint = styled.div`
    box-sizing: border-box;

    position: relative;
    width: 199px;
    height: 50px;
    background-color: #a8f7a8;
    border: 1px solid #8BE78B;
    text-align: center;
    padding-top: 10px;
    color: white;
    font-weight: 700;

    margin-bottom: 2.5px;

    &::after{
        content: '';
        position: absolute;
        top:-1px;
        left: -2px;
        width: 30px;
        height: 50px;
        border: 5px solid #8BE78B;
        background-color: lightgrey;
    }

    &:hover{
        ::after{
            background-color: #8BE78B;
        }
        
    }

    z-index: 10;
`

export default StyledOngoingSprint