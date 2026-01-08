import type { Component } from 'solid-js';
import Comp from './Comp';
import Top from './components/Top';
import Document from './components/Document';
import "./app.css"


const App: Component = () => {
  return (
    <>
      <Top/>
      
      <div class='container'>
         <Document/>
      
      </div>
    
    </>
  );
};

export default App;
