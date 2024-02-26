import React from "react";
import { useState } from "react";

export const AddContact = (props) => {
	const [ contact, setContact ] = useState({})


	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={contact.fullName}
							onChange= {(e) =>
								setContact9{
									...contact,
									fullName: e.target.value
								}
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
								setContact9{
									...contact,
									email: e.target.value
								}
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
								setContact9{
									...contact,
									phone: e.target.value
								}
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
								setContact9{
									...contact,
									address: e.target.value
								}
							}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
				</form>
			</div>
		</div>
	);
};