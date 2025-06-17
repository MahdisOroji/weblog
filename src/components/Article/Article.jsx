import styled from "../Article/Article.module.css"
import article from "./../../assets/images/Cropped_Image.png"

function Article(props){
    return(
        <div className={styled.articleWrapper}>
          <img src={props.article.imageUrl} />
          <h3> {props.article.title} </h3>
          <p>مدت زمان مطالعه {props.article.readingTime} دقیقه </p>
        </div>

    )
}


export default Article