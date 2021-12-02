import React, { Component } from "react";
import styled from "styled-components";
import { InvoiceScreen } from "./Views/InvoiceScreen";

class App extends Component {
  render() {
    return (
      <Main>
        <InvoiceScreen />
      </Main>
    );
  }
}

export default App;

const Main = styled.main`
  max-width: 992px;
  margin: 50px auto;
`;
