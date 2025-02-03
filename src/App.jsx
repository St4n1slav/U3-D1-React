import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import "./App.css";

function App() {
  return (
    <>
      <ButtonComponent buttonText="Invio" />
      <ImageComponent
        imgHeight="250px"
        imageUrl="https://plus.unsplash.com/premium_photo-1676422290431-f0d07a64eec5?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}

export default App;
