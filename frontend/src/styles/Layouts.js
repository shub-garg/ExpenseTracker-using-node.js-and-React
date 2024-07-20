import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
      transform: scale(0.9);
  transform-origin: top;
`;

export const LoginStyled = styled.div`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 236, 238);
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
  .login{
  width: 25vw;
  margin-left:40vw;
  align-content: center;
  height:100vh;
  }

.container {
  background-color: white;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  border-top: rgb(80, 98, 255) 0.5rem solid;
}
    h2 {
  margin: 1rem 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

input {
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid gray;
  font-size: 1.1rem;
}

button {
  background-color: rgb(80, 98, 255);
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0.3rem;
}

span a {
  text-decoration: none;
  color: rgb(80, 98, 255);
}

svg {
height:20px;
width:20px;}


.private {
  height: 100vh;
  width: 100vw;
  background-color: rgb(80, 98, 255);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 3rem;
  flex-direction: column;
  gap: 1rem;
}

.private button {
  background-color: black;
  padding: 2rem 10rem;
  font-size: 4rem;
  border-radius: 2rem;
}

`;