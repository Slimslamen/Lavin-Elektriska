import Main from "./pages/MainComponent";
import Blog from "./pages/Blog";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogProvider } from "./Context/BlogProvider"
import './App.css'

function App() {
  return (
  <div className="min-h-screen">
    <BlogProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            {/* <Route path="/Blog" element={<Blog />}/> */}
            <Route path="/Policy" element={<Policy />}/>
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </div>
  )
}

export default App
