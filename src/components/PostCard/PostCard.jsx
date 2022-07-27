import { Link } from "react-router-dom";
import styles from './PostCard.css'

const PostCard  = (props) => {
  
  return (  
    <>
      <div className="card-div">
        <h3>{props.post.headline}</h3>
          <p className="link-para">
            <Link 
              key={props.post.profile}
              to={`/profile-posts/${props.post.profile}`}
              >More posts from {props.post.author}
            </Link>
          </p>
        <p>{props.post.details}</p>
        { props.post.photo ?
          <a href={props.post?.photo}>
            <img src={props.post?.photo} alt="" />

          </a>
              :
          <p> No photo</p>
        }
        <div className="button-div">
          { props.post.link ?
          <a 
            role="button"
            href={props.post.link}> 
            <button className="link-btn">Link</button>
          </a>
          :
          <p className="link-para">🚫 No Link</p>
          }
          {props.user?.profile === props.post.profile &&
          <button 
            className="delete-btn" 
            onClick={()=> props.handleDeletePost(props.post._id)}
          >
            Delete
          </button>
          }
        </div>
      </div>
    </>
  )
}

export default PostCard;