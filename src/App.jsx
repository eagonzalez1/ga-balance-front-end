import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfilePosts from './pages/ProfilePosts/ProfilePosts'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddPost from './pages/AddPost/AddPost'
import * as postService from "./services/postService"
import style from './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (postData, photo) => {
    const newPost = await postService.create(postData)
    setPosts([...posts, newPost])
    if (photo) {
      newPost.photo = await postPhotoHelper(photo, newPost._id)
    }
    navigate('/')
  }

  useEffect (() => {
    const fetchAllPosts = async () => {
      const postData = await postService.getAll()
      setPosts(postData)
    }
    fetchAllPosts()
  },[])

  const handleDeletePost = async postId => {
    const deletedPost = await postService.deletePost(postId)
    const newPostsArray = posts.filter(post => post._id !== deletedPost._id)
    setPosts(newPostsArray)
    navigate('/')
  }

  const postPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await postService.addPhoto(photoData, id)
  }

  const sortedArr = posts.sort(function (a, b) {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  })
  const codingArr = sortedArr.filter(post => post.type === 'coding')
  const healthyArr = sortedArr.filter(post => post.type === 'healthy')
  const jobArr = sortedArr.filter(post => post.type === 'job')
  const entertainmentArr = sortedArr.filter(post => post.type === 'entertainment')
  const profileArr = sortedArr.filter(post => post.profile === user?.profile)


  return (
    <>
      <div className='page-view'>
        <NavBar user={user} handleLogout={handleLogout} />
        <main className='main'>
          <Routes>
            <Route path="/" element=
              {<Landing 
                user={user}
                posts={posts}
                codingArr={codingArr}
                healthyArr={healthyArr}
                jobArr={jobArr}
                entertainmentArr={entertainmentArr}
                handleDeletePost={handleDeletePost}
                />} />
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/profiles"
              element={user ? <Profiles /> : <Navigate to="/login" />}
            />
            <Route
              path="/changePassword"
              element={
                user ? (
                  <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
                  ) : (
                    <Navigate to="/login" />
                    )
                  }
            />
            <Route
              path="/posts/new"
              element={
                <AddPost handleAddPost={handleAddPost} />
              }
            />
            <Route
              path="/profile-posts/:id"
              element={
                <ProfilePosts 
                  user={user}
                  posts={posts}
                  profileArr={profileArr}
                  handleDeletePost={handleDeletePost}
                />
              }
            />
          </Routes>

        </main>
      </div>
    </>
  )
}

export default App
