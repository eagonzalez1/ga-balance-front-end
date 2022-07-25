import { useState } from "react"

function AddPost(props) {
	return (
		<>
			<h1>Add Post</h1>
			<form autoComplete="off">
				<div className="addPost-form">
          <label htmlFor="post-type-select" className="form-label">
            Type of Post:
          </label>
          <select 
            id="post-type-select"
            name="type" 
            // value={formData.foodBeverage}
            // onChange={handleChange}
          >
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
					/>
          <label htmlFor="description-input" className="form-label">
						Details
					</label>
					<textarea 
						type="text"
						className="form-input"
            rows="5"
						id="description-input"
						name="headline"
					/>
          <label htmlFor="link-input" className="form-label">
						Link
					</label>
					<input 
						type="text"
						className="form-input"
						id="link-input"
						name="link"
					/>
				</div>
				<div className="d-grid">
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