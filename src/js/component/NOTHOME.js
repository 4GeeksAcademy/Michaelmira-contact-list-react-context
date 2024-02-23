import React from "react";

import ContactCard from "./ContactCard.js";
import AddContact from "./AddContact.js";


export const Home = () => {
	return (
		<div className="text-center mt-5">
		<h1>Hello Welcome to Michael Mirisciotta's ContactCard Program.</h1>
		<p>
			
		</p>
		<Link className="btn btn-success" to="/contact-card" >
			Please press this button to go to the ContactCard
		</Link>
	</div>
	);
};
