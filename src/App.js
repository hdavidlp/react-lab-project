import logo from './logo.svg';
import './App.css';
import './css/basic.style.css'


import MenuGeneralPractice from './components/00_GeneralPractice/MenuGeneralPractice';
import TestingComponent from './components/01_DefineComponents/TestingComponent';
import UseStatePractice from './components/02_UseState/text-change/UseStatePractice'
import UseStateArray from './components/02_UseState/array-change/UseStateArray'
import TestingParams from './components/03_UsingParams/TestingParams';


function App() {
  return (
    <div >
      <MenuGeneralPractice /> 
      <TestingComponent />
      <UseStatePractice />
      <UseStateArray />
      <TestingParams /> 
    </div>
  );
}

export default App;
