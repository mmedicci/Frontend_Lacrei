import "@fontsource/nunito";
import Foot from "./componentes/Foot/Foot";
import Header from './componentes/Header/Header';
import { BrowserRouter, Route, Routes, Router, Navigate, Link } from 'react-router-dom';

function App() {
 
  return (
    <>      
      <Header />      
        
      <Foot />
    </>
  )
}

export default App
