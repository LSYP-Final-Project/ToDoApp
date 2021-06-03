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
    cursor: pointer;
    z-index: 10;
    border-bottom: 2px solid #8BE78B;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #8BE78B;
    }
`

export default StyledOngoingSprint