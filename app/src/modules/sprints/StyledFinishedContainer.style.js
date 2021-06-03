import styled from 'styled-components';

const StyledFinishedContainer = styled.div`
box-sizing: border-box;
    width: 200px;
    height: 250px;
    border: 1px solid #8BE78B;
    position: relative;
    padding-top: 52px;
    
    &::after{
        content: '';
        width: 200px;
        height: 50px;
        background-color: #8BE78B;
        position: absolute;
        top: -1px;
        left: -1px;
    }

    p{
        position: absolute;
        top: 5px;
        left: 40px;
        color: white;
        font-size: 25px;
        text-transform: uppercase;
        font-weight: 700;
        z-index: 2;
    }
`
export default StyledFinishedContainer;