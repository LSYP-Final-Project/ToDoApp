import styled from "styled-components";


const StyledOngoingContainer = styled.div`
    box-sizing: border-box;
    width: 150px;
    height: 250px;
    border: 1px solid #DC3545;
    position: relative;
    margin-bottom: 10px;
    padding-top: 49.5px;
    
    &::after{
        content: '';
        width: 150px;
        height: 50px;
        background-color: #DC3545;
        position: absolute;
        top: -1px;
        left: -1px;
    }

    p{
        position: absolute;
        top: 5px;
        left: 15px;
        color: white;
        font-size: 25px;
        text-transform: uppercase;
        font-weight: 700;
        z-index: 2;
    }
`

export default StyledOngoingContainer;

