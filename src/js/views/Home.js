import React, { useState, useContext}  from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";


export const Home = () => {

	const {store, actions } = useContext(Context)

	return (

		<>
			<div className="container">
				<div>
					<div className="text-right my-3">

					<Link className="btn btn-success" to="/add-contact" >
						Please press this button to Add Contact
					</Link>
					</div>
					<div
						id="contacts"
						className="panel-collapse collapse show"
						aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.contacts.map((c, i) => (
								<div>{c?.full_name}</div>
							  	// <ContactCard 
								// 	contact={c} 
								// />
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
