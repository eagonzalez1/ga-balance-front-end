import { Link } from "react-router-dom";
import styles from './PostCard.css'

const PostCard  = (props) => {
  
  return (  
    <>
      <div className="card-div">
        <h3>{props.post.headline}</h3>
        <p>{props.post.details}</p>
        <a 
          role="button"
          href={props.post.link}> 
          <button className="link-button">Link</button>
        </a>
        { props.post.photo ?
          <img src={props.post?.photo} alt="" />
              :
          <p>No photo</p>
        }
        <div>
          <button className="delete-btn" onClick={()=> props.handleDeletePost(props.post._id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}

export default PostCard;