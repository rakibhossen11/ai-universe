import React from "react";
import Button from "./component/Button/Button";
import Card from "./component/Card/Card";
import Header from "./component/Header/Header";

const App = () => {

  return (
    <>
      <Header/>
      <Button>Sort by Date</Button>
      <Card />
    </>
  );
};

export default App;
