import './App.css'
import React,{Component} from 'react'
import Message from './components/Message'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyle.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './User'
class App extends Component{
  render(){
    return(
     <div className="App">
      <User render= {(isLoggedIn)=>isLoggedIn?"Pujitha":"Guest"}/>
      {
        /*
       <ClickCounterTwo/>
       <HoverCounterTwo/>
        <PortalDemo/>
         <FRParentInput/>
        <FocusInput/>
        <RefsDemo/>
        <ParentComp/>
        <Table/>
        <FragmentDemo/>
        <Form/>
        <>
        <h1 className='error'>Error</h1>
       
        </>
        
        <Inline/>
        <StyleSheet primary={true}/>
        <><UserGreeting /><NameList /></>
      <ParentComponent/>
       <Message/>
      <Counter/> 
      <Greet name="Bruce" heroName="BatMan">
      <p>This is children property</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder woman"/>
      <Welcome name="Bruce" heronName="Batman"/>
      <Welcome name="Clark" heronName="Superman"/>
      <Welcome name="Diana" heronName="Wonder woman"/>
      <FunctionClick/>
      <ClassClick/> 
      <EventBind/>*/}
      
     </div>
    )
  }
}





// import React, { useState } from 'react';

 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

//   const toggleMode = () => {
//     if (mode === 'light') {
//         setMode('dark');
//         document.body.style.backgroundColor = 'grey';
//         showAlert("Dark mode has been enable", "success")
//     }
//     else {
//         setMode('light');
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light mode has been enable", "success")
//     }
//   }
//   return (
//     <>
//     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//     {/* <Navbar/> */}
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <div className="container my-3">
//     <TextForm heading="Enter the text to analyze below" mode={mode}/>
//     </div>
//     </> 
//   );
// }

export default App;