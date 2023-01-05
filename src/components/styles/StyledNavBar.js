import styled from "styled-components";


export const StyledNavBar = styled.div`
nav {
  position: center;
  top: 0;
  left: 0;
  right: 0;
} 

nav a {
  text-align: center
  display: inline-block;
  margin: 1rem 2rem;
  text-decoration: none;
  font-size: 1.5em;
  color: whitesmoke;
  border-bottom: 2px solid whitesmoke;
  transition: 0.1s;
}

nav a:hover,
nav a:active {
  color: grey;
  border-bottom: 2px solid ;
}
`;