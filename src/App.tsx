import Button from "./button";

function App() {
  const style: any = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#bfc3ba",
  };
  const textStyle: any = {
    textAlign: 'center',
    color: "#fffcf2",
    fontWeight: "bold",
    fontSize: "2rem"
  };
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#bfc3ba",
    aligntItems: 'center',
    margin: '0',
    paddingTop: '50px',
    color: "#fffcf2",
    fontSize: '3rem'

    
  };

  return (
    <>
  
      <header>
        <h1 style={headerStyle}>Welcome to this useless page</h1>
      </header>
      <div style={style}>
        <p style={textStyle}>
          I can count to <Button /> 
        </p>
        <p style={textStyle}>
          I sneezed <Button /> times
        </p>
      </div>
    </>
  );
}

export default App;
