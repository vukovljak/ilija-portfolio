import './App.css';
import Home from './pages/Home.js'
import MyWork from './pages/MyWork.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

    return (
    <>
    <BrowserRouter basename="/ilija-portfolio">
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/MyWork' exact element={<MyWork/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;
