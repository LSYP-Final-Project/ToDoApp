import styled from 'styled-components';


const SprintOngoingTask = styled.div`
    max-width: 100%;
    height: 50px;
    overflow-wrap: break-word;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    
    p{
        margin-left: 5px;
        margin-right: 5px;
        text-align: justify;
        width: 100%;
    }

    .points-1{
        min-width: 40px;
        background-color: #D1E7DD;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
    }
    .points-2{
        min-width: 40px;
        background-color: #FFE69C;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
    }
    .points-3{
        min-width: 40px;
        background-color: #FECBA1;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
    }
    .points-4{
        min-width: 40px;
        background-color: #F1AEB5;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
    }
    .points-5{
        min-width: 40px;
        background-color: #EA868F;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0 auto;
        padding-top: 10px;
    }

    .minus-sign{
        min-width: 40px;
        text-align: center;
        padding-top: 2px;
        font-weight: 700;
        font-size: 25px;
        color: white;
        background: #F79696;

        &:hover{
            background-color: #DC3545;
            cursor: pointer;
        }
    }

    &:hover{
        background-color: #fffdf4;
        
    }
`
export default SprintOngoingTask