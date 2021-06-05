import styled, {css} from 'styled-components';

const SharedCss = css`
    min-width: 40px;
    font-weight: 700;
    color: black;
    text-align: center;
    margin: 0 auto;
    padding-top: 10px;
`
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
        background-color: #D1E7DD;
        ${SharedCss};
    }
    .points-2{
        background-color: #FFE69C;
        ${SharedCss};
    }
    .points-3{
        background-color: #FECBA1;
        ${SharedCss};
    }
    .points-4{
        background-color: #F1AEB5;
        ${SharedCss};
    }
    .points-5{
        background-color: #EA868F;
        ${SharedCss};
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