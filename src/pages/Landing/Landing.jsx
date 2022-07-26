import PostCard from '../../components/PostCard/PostCard'
import styles from './Landing.module.css'


const Landing = (props) => {
  return (
    <main className='posts-container'>
      <h1>Hi, {props.user ? props.user.name : 'friend'}</h1>
      <div className='coding-container'>
        {props.codingArr.map(post =>
          <PostCard
            key={post._id}
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />  
        )}
        
      </div>
      <div className='healthy-container'>

      </div>
      <div className='job-container'>

      </div>
      <div className='entertainment-container'>

      </div>
    </main>
  )
}

export default Landing
