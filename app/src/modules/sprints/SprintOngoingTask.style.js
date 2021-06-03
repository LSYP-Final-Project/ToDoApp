import styled from 'styled-components';


const SprintOngoingTask = styled.div`
    max-width: 100%;
    height: 50px;
    overflow-wrap: break-word;
    display: flex;
    overflow: hidden;
    
    p{
        margin-left: 5px;
        margin-right: 5px;
        text-align: justify;
        width: 100%;
    }

    .points-1{
        min-width: 40px;
        border-left: 1px solid black;
        background-color: #8CC9FD;
        font-weight: 700;
        color: black;
    }
    .points-2{
        min-width: 40px;
        border-left: 1px solid black;
        background-color: #0cf574;
        font-weight: 700;
        color: black;
    }
    .points-3{
        min-width: 40px;
        border-left: 1px solid black;
        background-color: #f3ca40;
        font-weight: 700;
        color: black;
    }
    .points-4{
        min-width: 40px;
        border-left: 1px solid black;
        background-color: #f08a4b;
        font-weight: 700;
        color: black;
    }
    .points-5{
        min-width: 40px;
        border-left: 1px solid black;
        background-color: #e63462;
        font-weight: 700;
        color: black;
    }

    .minus-sign{
        border-right: 1px solid black;
        min-width: 40px;
        text-align: center;
        padding-top: 2px;
        font-weight: 700;
        font-size: 25px;
        color: white;
        background: #F79696;
    }
`
export default SprintOngoingTask