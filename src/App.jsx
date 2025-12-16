import Main from "./pages/MainComponent";
import Policy from "./pages/policyPage";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogProvider } from "./Context/BlogProvider"
import './App.css'
import Shop from "./components/ShopFolder/Shop";

function App() {
  return (
  <div className="min-h-screen">
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          {/* Testing */}
            <Route path="/" element={<Main />}/>
            <Route path="/policyPage" element={<Policy />}/>
            {/* <Route path="/Shop" element={<Shop />}/> */}
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </div>
  )
}

export default App
