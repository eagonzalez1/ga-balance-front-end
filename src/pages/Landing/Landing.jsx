import PostCard from '../../components/PostCard/PostCard'
import styles from './Landing.css'


const Landing = (props) => {
  return (
    <div className='posts-container'>
      <div className='individual-container'>
        <h2>Coding Posts</h2>
          {props.codingArr.map(post =>
          <PostCard
            key={post._id}
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />  
        )}
      </div>
      <div className='individual-container'>
        <h2>Healthy Habit Hacks</h2>
        {props.healthyArr.map(post =>
          <PostCard
            key={post._id}
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />  
        )}
      </div>
      <div className='individual-container'>
        <h2>Job-Searching Ideas</h2>
        {props.jobArr.map(post =>
          <PostCard
            key={post._id}
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />  
        )}
      </div>
      <div className='individual-container'>
        <h2>Fun-Related Posts</h2>
        {props.entertainmentArr.map(post =>
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

export default Landing
