import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importacion de componentes
import CompShowBlogs from './blog/ShowBlogs.jsx'
import CompCreateBlog from './blog/CreateBlog.jsx'
import CompEditBlog from './blog/EditBlog.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs/>} />
          <Route path='/create' element={ <CompCreateBlog/>} />
          <Route path='/edit/:id' element={ <CompEditBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
