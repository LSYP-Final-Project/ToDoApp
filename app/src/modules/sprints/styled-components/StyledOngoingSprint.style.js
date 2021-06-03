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
    border-bottom: 2px solid #F79696;
    z-index: 10;
    transition: 0.2s all ease-in-out;

    &:hover{
        background: #F79696;
        border: 1px solid #f2b5b5;
    }
`

export default StyledOngoingSprint