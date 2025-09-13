import Main from "./pages/MainComponent";
import Policy from "./pages/Policy.jsx";
import NotFound from "./pages/notFound.jsx";
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
            <Route path="/policyPage" element={<Policy />}/>
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </div>
  )
}

export default App
