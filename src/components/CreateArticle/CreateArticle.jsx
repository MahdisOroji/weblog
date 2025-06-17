import Navbar from "../../components/Navbar/Navbar"
import styled from "../CreateArticle/CreateArticle.module.css"
import React, { useState } from "react";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import axios from "axios";




function CreateArticle() {

    const [article, setArticle] = useState({
        title: "",
        date: "",
        athor: "",
        readingTime: "",
        message: "",
        imageUrl: ""
    }
    )

    const handleChangeArticle = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const handleChangeArticleMessage = (e) =>{
        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value
        }))
    }

    const handleCreateNewArticle = () =>{
        axios.post("http://localhost:8000/articles", {
            "id": 9,
            "imageUrl": article.imageUrl,
            "title": article.title,
            "readingTime": article.readingTime,
            "date": article.date,
            "athor": article.athor,
            "content": article.message,
        })

    }

    return (

        <>
            <Navbar title="مهدیس بلاگ" />
            <div className={styled.CreateArticlePage}>
                <div className="container">
                    <h1> ساخت مقاله </h1>

                    <Input label="عنوان" name="title" handleChange={handleChangeArticle} />
                    <Input label="تاریخ" name="date" handleChange={handleChangeArticle}/>
                    <Input label="مدت زمان خواندن" name="readingTime" handleChange={handleChangeArticle}/>
                    <Input label="نویسنده" name="athor" handleChange={handleChangeArticle}/>
                    <Input label="آدرس عکس" name="imageUrl" handleChange={handleChangeArticle}/>

                    <TextArea label="متن" handleChange={handleChangeArticleMessage}/>

                    <div className={styled.buttonWrapper}>
                        <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
                    </div>
                    
                </div>


            </div>

        </>

    )
}


export default CreateArticle