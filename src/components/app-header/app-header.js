import React from "react"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${(props) => (props.colored ? "red" : "black")};
    :hover {
      color: purple;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, total}) => {
   return (
      <Header>
         <h1>Нурислам Валеев</h1>
         <h2>{total} записей, из них понравилось {liked}</h2>
      </Header>
   )
}

export default AppHeader
