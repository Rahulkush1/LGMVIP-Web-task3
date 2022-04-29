import React, { useState } from "react";

import ProfileData from "./ProfileData";

function Form() {
	const [userdata, setUserdata] = useState({
		Name: "",
		email: "",
		website: "",
		imgurl: "",
		gender: "",
		skills: "",
	});

	const [Record, setRecord] = useState([]);

	const handlevent = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserdata({ ...userdata, [name]: value });
	};

	const handlesubmit = (e) => {
		e.preventDefault();
		const newRecord = { ...userdata, id: new Date().getTime().toString() };
		setRecord([...Record, newRecord]);
		setUserdata({
			Name: "",
			email: "",
			website: "",
			imgurl: "",
			gender: "",
			skills: "",
		});
	};

	return (
		<>
			<div className="form_block">
				<form onSubmit={handlesubmit}>
					<div className="form">
						<div className="labels">
							<label htmlFor="Name">Name : </label>
							<label htmlFor="email"> Email : </label>
							<label htmlFor="website"> Website Link : </label>
							<label htmlFor="img"> Profile Img : </label>
							<label htmlFor="gender"> Gender : </label>
							<label htmlFor="skill"> Skills : </label>
						</div>

						<div className="input-fields">
							<input
								type="text"
								name="Name"
								value={userdata.Name}
								placeholder="Enter your Name"
								onChange={handlevent}
							/>
							<input
								type="email"
								name="email"
								value={userdata.email}
								placeholder="Enter your email"
								onChange={handlevent}
							/>
							<input
								type="url"
								name="website"
								value={userdata.website}
								placeholder="Enter your website link"
								onChange={handlevent}
							/>
							<input
								type="url"
								name="imgurl"
								value={userdata.imgurl}
								placeholder="Enter img url only"
								onChange={handlevent}
							/>
							<div className="gender">
								<input
									type="radio"
									name="gender"
									value="Male"
									onChange={handlevent}
								/>
								<label htmlFor="Male"> Male</label>
								<input
									type="radio"
									name="gender"
									value="Female"
									onChange={handlevent}
								/>
								<label htmlFor="Male"> Female</label>
							</div>
							<input
								type="text"
								name="skills"
								value={userdata.skills}
								placeholder="Enter your Skills"
								onChange={handlevent}
							/>
						</div>
					</div>

					<div className="form-section">
						<input type="submit" name="submit" />
						<input type="reset" name="reset" id="" />
					</div>
				</form>
			</div>
			<hr />
			<div className="grid-container">
			{Record.map((current, index) => {
				return (
					<ProfileData
						key={current.index}
						Name={current.Name}
						email={current.email}
						website={current.website}
						imgurl={current.imgurl}
						gender={current.gender}
						skills={current.skills}
					/>
				);
			})}
			</div>
		</>
	);
}

export default Form;
