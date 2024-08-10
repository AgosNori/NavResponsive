
import { BrowserRouter, Routes, Route } from 'react-router-dom';import './App.css'
import Nav from './Components/Nav/Nav'


function App() {


  return (
    <>
      <BrowserRouter basename='/Cita2New' >

        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>


      </BrowserRouter>

    </>

  )
}

export default App
