import PostCard from '../../components/PostCard/PostCard'
import styles from '../Landing/Landing.css'


const ProfilePosts = (props) => {
  return (
    <div className='posts-container'>
      <div className='individual-container'>
        <h2>{props.user.name}'s Posts</h2>
          {props.profileArr.map(post =>
          <PostCard
            key={post._id}
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />  
        )}
      </div>
    </div>
  )
}

export default ProfilePosts
