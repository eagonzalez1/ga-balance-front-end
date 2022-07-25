import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from './AddPost.css'


function AddPost(props) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    type: 'coding',
    headline: '',
    details: '',
    link: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddPost(formData, photoData.photo)
      navigate('/')
    } catch (err) {
        console.log(err)
      }
    }

	return (
		<>
			<h1>Add Post</h1>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div className="addPost-form">
          <label htmlFor="post-type-select" className="form-label">
            Type of Post:
          </label>
          <select 
            id="post-type-select"
            name="type" 
            value={formData.type}
            onChange={handleChange}
          >
            <option value="coding">Select...</option>
            <option value="coding">Coding Recommendation/Resource</option>
            <option value="healthy">Healthy Habit Hack</option>
            <option value="job">Job Search Ideas</option>
            <option value="entertainment">Entertainment</option>
          </select>
					<label htmlFor="headline-input" className="form-label">
						Headline
					</label>
					<input 
						type="text"
						className="form-input"
						id="headline-input"
						name="headline"
            value={formData.headline}
            onChange={handleChange}
					/>
          <label htmlFor="description-input" className="form-label">
						Details
					</label>
					<textarea 
						type="text"
						className="form-input"
            rows="5"
						id="description-input"
						name="details"
            value={formData.details}
            onChange={handleChange}
					/>
          <label htmlFor="link-input" className="form-label">
						Link
					</label>
					<input 
						type="text"
						className="form-input"
						id="link-input"
						name="link"
            value={formData.link}
            onChange={handleChange}
					/>
          <label htmlFor="photo-upload" className="form-label">
            Upload Photo
            </label>
            <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
				</div>
				<div className="addPost-form">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Post
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPost