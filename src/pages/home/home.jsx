import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import styled from "../home/Home.module.css";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading"

function Home() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:8000/articles").then(result => {
            setArticles(result.data)
            setIsLoading(false)


        })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            });


    }, []); // این [] مهمه که فقط یکبار useEffect اجرا بشه



    // let articles = [

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="مهدیس بلاگ" />
         
         

            <div className="container">
                <h2>مقالات جدید</h2>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className={styled.articles}>
                            <div className={styled.articleList}>
                                {
                                    articles.map(article => (
                                        <Link to={`/article/${article.id}`}>
                                            <Article key={article.id} article={article} />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                    )
                }
            </div>
            <Footer />
        </div>

    )
}

export default Home 