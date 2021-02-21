import { render } from '@testing-library/react';
import './App.css';
import React, { Component } from 'react'
import ChildrenComponentFirst from './ChildrenComponent1';
import ChildrenComponentSecond from './ChildrenComponent2';



function App() {
  
 const handleClick = () => { 
  alert("Bien joué min tcho!")
 }

  const handleClick2 = () => {
  alert("Bien joué min enfant!")
  }

  return (
    <div className="App">
      
      <ChildrenComponentFirst 
      
      data={
        { 
        titre: "Super Titre",
        btn: (handleClick),
        contenu: "contenu info ici"
        }
      }
    />

 <ChildrenComponentFirst 
      
      data={
        { 
        titre: "Super Titre",
        btn: (handleClick2),
        contenu: "contenu info 234 ici"
        }
      }
    />

<ChildrenComponentSecond 

data={
  { 
  titre: "Titre enfant 2",
  btn: (handleClick2),
  contenu: "contenu info petitititit enfant ici"
  }
}
/>

    </div>
  )
  }


export default App;
