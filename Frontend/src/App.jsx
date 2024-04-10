import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App