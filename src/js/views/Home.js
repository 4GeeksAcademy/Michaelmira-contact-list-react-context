import React from "react";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
import { AddContact } from "../component/AddContact";
import { ContactCard } from "../component/ContactCard";


export const Home = () => (

	<>
			<div className="container">
				<div>
					<p className="text-right my-3">
						
					<Link className="btn btn-success" to="/add-contact" >
						Please press this button to Add Contact
					</Link>
					</p>
					<div
						id="contacts"
						className="panel-collapse collapse show"
						aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							<ContactCard />
							<ContactCard />
							<ContactCard />
							<ContactCard />
						</ul>
					</div>
				</div>
			</div>
	</>
);
