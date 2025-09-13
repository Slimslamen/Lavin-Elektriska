import Main from "./pages/MainComponent";
import Policy from "./pages/policy";
import NotFound from "./pages/notFound";
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
            
            <Route path="/policy" element={<Policy />}/>
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </div>
  )
}

export default App
