import React from "react";
import { useState } from "react";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
import { AddContact } from "../component/AddContact";
import { ContactCard } from "../component/ContactCard";


export const Home = () => {

	const [ contacts, setContacts] = useState ([])
		
	const addContact =(contact) => {
		console.log ("This is the contact", contact);
		setContacts(contacts.concat(contact))
	};

	const updateContact =(contact, contactToUpdate) => {
		console.log ("We are Editing", contact);
		setContacts(contacts.map((oldContact, index) => {
			if(contactToUpdate === index ) return contact;
			else return oldContact
		}));
	};

	const deleteContact =(indexToDelete) => {
		console.log ("We are deleteing");
		setContacts(contacts.filter((item, index) => indexToDelete !== index  ));
	};

	return (

		<>
			<div className="container">
				<div>
					<div className="text-right my-3">
						<AddContact onSave={addContact} />
					<Link className="btn btn-success" to="/add-contact" >
						Please press this button to Add Contact
					</Link>
					</div>
					<div
						id="contacts"
						className="panel-collapse collapse show"
						aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{contacts.map((c, i) => (
							  <ContactCard 
							  contact={c} 
							  onDelete={() => deleteContact(i)}
							  onUpdate={(contactToUpdate) => updateContact(contactToUpdate, i)} />
							))}

						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
