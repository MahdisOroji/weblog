import AboutUs from "./pages/AboutUs/AboutUs"
import Home from "./pages/home/home"
import ArticlePage from "./pages/articlePage/ArticlePage"
import CreateArticle from "./components/CreateArticle/CreateArticle"
import NotFound from "./pages/notFound/NotFound"
import { Route, Routes } from "react-router-dom"
function App() {
    return (
        <div>
            <Routes>
                <Route path="*" element={ <NotFound /> } />
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <AboutUs /> } />
                <Route path="/article/:id" element={ <ArticlePage /> } />
                <Route path="/create-article" element={<CreateArticle />}/>
            </Routes>

        </div>
    )
}

export default App