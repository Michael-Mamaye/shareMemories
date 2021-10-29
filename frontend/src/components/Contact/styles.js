import styled  from "styled-components";

export const StyledButton = styled.button`
    height: 50px;
    width: 350px;
    background-color: #00203FFF;
    border: #00203FFF 1px solid;
    transform: scale(1);
    color:#ADEFD1FF;
    outline: none;
    font-weight: bolder;
    font-size: 20px;
    &:hover{
        background: #ADEFD1FF;
        border: #ADEFD1FF 1px solid;
        color:#00203FFF;
        outline: none;
        transition: background 0.3s;
    }
`;
export const StyledContainerDiv = styled.div`
    padding: 20px;
    height: 100vh;
    width: 95vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const StyledDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
`;
export const StyledTitle=styled.p`
    font-size: 40px;
    font-weight: bolder;
    color: #00203FFF;
`;
export const StyledTextArea=styled.textarea`
    color: #00203FFF;
    padding: 5px;
    width: 350px;
    height: 100px;
    font-weight: bolder;
    font-size: 20px;
   
`;
export const StyledInput=styled.input`
    color: #00203FFF;
    font-weight: bolder;
    font-size: 20px;
    padding: 5px;
    border: none;
    margin-bottom: 30px;
    width: 350px;
    outline: none;
    border-bottom: 1px solid #00203FFF;
`;