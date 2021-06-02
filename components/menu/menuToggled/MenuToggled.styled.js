import styled from 'styled-components'

export const StyledMenuToggled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: tomato;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 1.5s ease;
  z-index: 2;
  
  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    

    &:hover {
      color: green;
    }
  }
`
