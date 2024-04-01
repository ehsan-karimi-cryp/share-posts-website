import { BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import IndexUser from "./pages/users/IndexUser";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<IndexUser />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
