import React from "react";

function ProfileData(props) {
	return (
		<div className="grid-items">
			<div class="card">
				<img className="profile_img" src={props.imgurl} alt=""  />
				<h1>{props.Name}</h1>
				<p>{props.gender}</p>
				<p class="title">{props.website}</p>
				<p>{props.email}</p>
				<p>{props.skills}</p>
				
				<div>
					
				</div>
				
			</div>
		</div>
	);
}

export default ProfileData;
