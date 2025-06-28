import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Policy from "./pages/Policy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
  <div className="min-h-screen">
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Main />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Policy" element={<Policy />}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
