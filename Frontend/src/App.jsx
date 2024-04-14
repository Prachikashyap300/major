import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import { SnackbarProvider, useSnackbar } from 'notistack'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Contact from './Components/Contact'
import ManageUser from './Components/ManageUser'


const App = () => {
  return (
    <div>
        <SnackbarProvider>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/ManageUser' element={<ManageUser/>}/>
            </Routes>
        </BrowserRouter>
        </SnackbarProvider>
        
    </div>
  )
}

export default App