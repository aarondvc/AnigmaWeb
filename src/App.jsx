import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { GitHubPrivate } from "./pages/GitHubPrivate";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />}/>
      <Route path="private-repo" element = {<GitHubPrivate />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
