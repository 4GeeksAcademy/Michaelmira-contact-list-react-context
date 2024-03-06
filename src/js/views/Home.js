import React, { useState, useContext}  from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import FetchAll from "../component/FetchAll";


export const Home = () => {

	const {store, actions } = useContext(Context)

	return (

		<>
			<div className="container-fluid min-vh-100 align-items-center bg-dark">
				<div className="container min-vh-100 bg-light ">
					<div>
						<div className="d-flex justify-content-end my-3">
						<FetchAll />

							<Link className="btn btn-success" to="/add-contact" >
								Add New Contact
							</Link>
						</div>
						<div
							id="contacts"
							className="panel-collapse collapse show"
							aria-expanded="true">
							<ul className="list-group pull-down" id="contact-list">
								{store.contacts.map((c, i) => (
									<ContactCard 
										key={i}
										contact={c} 
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
				</div>
		</>
	);
};
