import logo from './logo.svg';
import './App.css';
import './css/basic.style.css'


import MenuGeneralPractice from './components/00_GeneralPractice/MenuGeneralPractice';
import TestingComponent from './components/01_DefineComponents/TestingComponent';
import UseStatePractice from './components/02_UseState/text-change/UseStatePractice'
import UseStateArray from './components/02_UseState/array-change/UseStateArray'
import TestingParams from './components/03_UsingParams/TestingParams';
import TestUseEffect from './components/04_useEffect/TestUseEffect';
import TextForm from './components/05_Forms/TextForm';
import { useState } from 'react';


function App() {

  const [showComponentsSection, setShowComponentsSection] = useState(true)


  return (
    <div >

      {/* <div className="form-group">
        <label>
          <input type="checkbox"
            name='allowUpdateContext' 
            checked={allowUpdatContext}
            onChange={handleUpdateContext} 
          />
          Components Section
        </label>

      </div> 

      
      <MenuGeneralPractice />
      <TestingComponent />
      <UseStatePractice />
      <UseStateArray />
      <TestingParams /> 
      <TestUseEffect /> */}
      <TextForm />
    </div>
  );
}

export default App;
