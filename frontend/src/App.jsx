import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import Create from './pages/Create'
import NoteDetail from './pages/NoteDetail'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=> toast.success("hehheh")}>hello</button>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/create" element = {<Create />}/>
        <Route path = "/note/:id" element = {<NoteDetail />}/>
      </Routes>
    </div>
  )
}

export default App
