import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Best Artist to Ever do It" direction="horizontal">
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
        <div>Turtle the rapper</div>
      </Container>
      <Container header="Best Artist to Ever do It" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
