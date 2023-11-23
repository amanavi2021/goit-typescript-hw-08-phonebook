import styled from '@emotion/styled';

export const ContactsForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
width: 300px;

margin-top:25px;
border: 1px solid black;
padding: 10px;
`;



export const ButtonTest1 = styled.a`
  margin-top: 30px;
  padding: 30px;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(101, 202, 18, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);


:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}
`;


export const ButtonTest = styled.a`
margin: 20px;
position:relative;
display: inline-block;
border:0;
border-radius: 5px;
box-shadow: inset 0 0 0 1px rgba(0,0,0,.03), inset 0px 4px 3px -2px rgba(0,0,0,.07);;
outline: 0;
text-decoration: none;

`;


export const Text = styled.span`

  /* color:#fff; */

  color:rgb(71, 73, 206);
  font-size:20px;
  background:transparent;
  cursor:pointer;
  border:1px solid rgb(71, 73, 206);
  width:190px;
  height:35px;
  position:absolute!important;
  left:50%;
  top:50%;
  text-align:center;
  -webkit-transform:translate(-50%,-50%);
  transform:translate(-50%,-50%);
   -webkit-transition:all .6s ease-in-out;
  transition:all .6s ease-in-out;
 overflow:hidden;

::before{
  content:'';
  position:absolute;
  top:-130px;
  margin:auto;
  display:block;
  border-radius:50%;
  width:300px;
  height:300px;
  left:-50px;
  -webkit-transition:box-shadow .6s ease-in-out;
  transition:box-shadow .6s ease-in-out;
  z-index:-1;
 
}
:hover{
  color:#fff;
  border:1px solid #ee3769;
}
:hover::before{
  box-shadow:inset 0 0 0 160px #ee3769;
}
`



