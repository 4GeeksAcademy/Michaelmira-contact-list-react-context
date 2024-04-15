import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

export const EditContact = () => {
    const params= useParams()
	const [ contact, setContact ] = useState({
		full_name: contact ? contact.full_name : "",
		email: contact ? contact.email : "",
		phone: contact ? contact.phone : "",
		address: contact ? contact.address : "",
		agenda_slug: "michaelmira"
	});
	const {store,actions}= useContext(Context)
	let navigate = useNavigate()
	
    useEffect(() => {
        setContact(store.contacts.find((item)=> item.id == params.theid ))
    }, []);

	const onSave = async ()=>{
		try{
			let response = await actions.editContact(contact)
			if (response==false){
				alert("an error occured while editing contact")
			}else{
				navigate("/")
			}
		}catch(error){console.log(error)}
	}

	return (
		<div className="container-fluid min-vh-100 align-items-center bg-dark py-5 ">
			<div className="container d-flex flex-column bg-light my-5 pb-5 px-5  ">
				<h1 className="text-center mt-5">Edit Contact</h1>
				<div>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.full_name}
							onChange= {(e) =>
								setContact({
									...contact,
									full_name: e.target.value
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
						type="button"
						onClick={() => {onSave()} }
						className="btn btn-primary form-control">
						save
					</button>
				</div>
			</div>
		</div>
	);
};