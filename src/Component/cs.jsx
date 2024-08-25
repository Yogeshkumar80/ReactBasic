import { useState } from "react";



const styles={
    dark:{
      backgroundColor:"black",
      color:"white"
    },
    light:{
        backgroundColor:"white",
        color:"black"
    }
}
const Cass = () => {
  const [theme, setTheme] = useState(false)
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div style={theme ? styles.dark : styles.light  }>
      <h1 style={{color:"blue"}}>Inline</h1>
      <h1>Internal</h1>
      <h1>External</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Cass;
