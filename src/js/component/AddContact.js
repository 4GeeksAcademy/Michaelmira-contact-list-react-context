import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";



export const AddContact = () => {
	const [ contact, setContact ] = useState({
		fullName: contact ? contact.fullName : "",
		email: contact ? contact.email : "",
		phone: contact ? contact.phone : "",
		address: contact ? contact.address : "",
	});
	const {store,actions}= useContext(Context)
	let navigate = useNavigate()
	


	const onSave = async ()=>{
		try{
			let response = await actions.AddContact(contact)
			if (response==false){
				alert("an error occured while adding contact")
			}else{
				navigate("/")
			}
		}catch(error){console.log(error)}
		
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={onSave()}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.fullName}
							onChange= {(e) =>
								setContact({
									...contact,
									fullName: e.target.value
								})
							}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={contact.email}
							onChange= {(e) =>
								setContact({
									...contact,
									email: e.target.value
								})
							}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={contact.phone}
							onChange= {(e) =>
								setContact({
									...contact,
									phone: e.target.value
								})
							}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={contact.address}
							onChange= {(e) =>
								setContact({
									...contact,
									address: e.target.value
								})
							}
						/>
					</div>
					<button
						type="submit"

						 
						className="btn btn-primary form-control">
						save
					</button>
				</form>
			</div>
		</div>
	);
};