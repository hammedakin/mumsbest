import styled from "styled-components";


export const StyledNavbar = styled.nav`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  transition: 0.5s ease !important;

  img {
    width: 120px;
  }

  button.navbar-toggler {
  background-color: none !important;
}

.navbar-toggler-icon {
  background: none !important;
}

  .nav-item {
    
    a {
      color: var(--pry-color);
      font-size: 1rem;
      display: block;
      padding: 2rem 1rem 0.5rem;
      margin: 0 1rem;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      font-weight:600;
      
      
      :hover {
      transition: 0.1s ease !important;
      background-color: var(--pry-color);
      color: var(--light-color);
      }
    }


}

`;