import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import { BookList2 } from './BookList2';
import { BookList3 } from './BookList3';
import { BookList4 } from './BookList4';
import { UseStateData01 } from './UseState/UseStateData01';
import { UseStateData02 } from './UseState/UseStateData02';
import { CounterApp } from './UseState/CounterApp';
import { UseStateArrayOfObjects } from './UseState/UseStateArrayOfObjects';
import { UseEffectChangeName01 } from './UseEffect/UseEffectChangeName01';
import { UseEffectGitHubUser } from './UseEffect/UseEffectGitHubUser';
import { ControlInputForm } from './Forms/ControlInputForm';
import { MultipleInputForm } from './Forms/MultipleInputForm';
import { UseRefDemo } from './UseState/UseREf/UseRefDemo';
import { PropDrillingDemo } from './PropDrilling/PropDrillingDemo';
import { ContextBook } from './PropDrilling/ContextBook';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './Router/Home';
import { About } from './Router/About';
import { Main } from './Router/Main';
import { Products } from './Router/Products';
import { SingleProduct } from './Router/SingleProduct';
import { useState } from 'react';
import { Login } from './Router/Login';
import { Dashboard } from './Router/Dashboard';
import { Hero } from './Hero';
import ErrorBoundary from './ErrorBoundary';
import { ProtectedRoute } from './Router/ProtectedRoute';
function App() {
  var[user,setUser]=useState({fname:"",mail:""});
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<h1>This is Home Component</h1>}/>
        <Route path='/about' element={<h1>This is About Component</h1>} />
        <Route path='/contact' element={<h1>This is Contact Component</h1>} /> */}
        <Route path='/' element={<Main/>} >
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:productId' element={<SingleProduct/>} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='/dashboard' 
            element={<ProtectedRoute user={user}><Dashboard user={user}/></ProtectedRoute>} />
        </Route>

      </Routes>
      </BrowserRouter>
    {/* <h1>Welcome to rect class</h1> */}
    {/* <h2>Hello world</h2> */}
    {/* <Greet/> */}
    {/* <Greeting></Greeting> */}
    {/* <Greeting2></Greeting2> */}
    {/* <BookList></BookList> */}
    {/* <BookList2></BookList2>
     */}
     {/* <BookList3></BookList3> */}
     {/* <BookList4></BookList4> */}
     {/* <UseStateData01></UseStateData01> */}
     {/* <UseStateData02></UseStateData02> */}
     {/* <CounterApp></CounterApp> */}
     {/* <UseStateArrayOfObjects></UseStateArrayOfObjects> */}
     {/* <UseEffectChangeName01></UseEffectChangeName01> */}
     {/* <UseEffectGitHubUser></UseEffectGitHubUser> */}
     {/* <ControlInputForm></ControlInputForm> */}
     {/* <MultipleInputForm></MultipleInputForm> */}
     {/* <UseRefDemo></UseRefDemo> */}
     {/* <PropDrillingDemo></PropDrillingDemo> */}
     {/* <ContextBook></ContextBook> */}
     {/* <Hero heroname={"Batman"}/> */}
          {/* <Hero heroname={"Joker"}/> */}
          <ErrorBoundary> <Hero heroname={"Superman"}/></ErrorBoundary>
    </div>
  );
}
function Greet()
 {  
  return (<div> <h3>Good Evening class from greet function</h3></div>)
 }

 //Anonymous function
var Greeting=function ()
{
return (<div><h3>This is Anonymous function</h3></div>)
}

//Arrow function
var Greeting2=()=>{
  return (<div className='myclass'><h3 style={{'color':'red','backgroundColor':'lightgray'}}>This is Arrow function</h3></div>)
}




export default App