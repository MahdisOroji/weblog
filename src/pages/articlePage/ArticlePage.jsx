import Navbar from "../../components/Navbar/Navbar"
import Styled from "../articlePage/ArticlePage.module.css"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function ArticlePage() {

    const [article, setArticle] = useState({})

    const params = useParams();
    console.log("params.id", params.id);
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`http://localhost:8000/articles/${params.id}`)
            .then(result => {

                setArticle(result.data);
                setIsLoading(false)

            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            })

    }, [])


    return (
        <div>
            <Navbar title="مهدیس بلاگ" />
            <div className={Styled.articleWrapper}>
                <div className="container">
                    {isLoading ? (<p> لطفا چند لحظه صبر کنید...</p>) :
                     (
                        <>
                            <h1>
                                {article.title}
                            </h1>
                            <div className={Styled.articleInfo}>

                                <span> تاریخ : {article.date} </span>
                                <span> نویسنده: {article.athor}</span>
                                <span> زمان مطالعه {article.readingTime} </span>

                            </div>
                            <img src={article.imageUrl} alt="" />
                            <p>
                                {article.content}
                            </p>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>

    )

}

export default ArticlePage