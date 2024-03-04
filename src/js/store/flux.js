const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]

		},
		actions: {
			getContacts:()=>{
				fetch(process.env.BACKEND_URL+"/agenda/michaelmira")
				.then(resp=>resp.json())
				.then(data=>setStore({contacts:data}))
			},
			editContact: async(contact) =>{
				let opt = {
					method:"PUT",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)

				}
				try{
					let response = await fetch(process.env.BACKEND_URL+"/"+contact.id , opt)
					if (!response.ok){
						return false
					}else{
						getActions().getContacts()
						return true
					}
				}catch(error) {console.log(error)}

			},
			addContact: async(contact)=>{
				let opt = {
					method:"POST",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)
				}
				try{
					let response = await fetch(process.env.BACKEND_URL+"/"+contact.id , opt)
					if (!response.ok){
						return false
					}else{
						// let newContacts = getStore().contacts.concat(contact)
						// setStore({contacts: newContacts})
						getActions().getContacts()
						return true
					}
				}
				catch(error){console.log(error)}
			},
			deleteContactFromApi: async (contactId) => {
				try {
					const apiUrl = process.env.BACKEND_URL + "/" + contactId;
			
					// Fetch the current contacts
					const currentContacts = getStore().contacts;
			
					// Filter out the contact to be deleted
					const updatedContacts = currentContacts.filter(contact => contact.id !== contactId);
			
					// Make a PUT request to update the contacts on the backend
					let response = await fetch(apiUrl, {
						method: "PUT",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(updatedContacts)
					});
			
					if (!response.ok) {
						console.error("Error updating contacts on API:", response.statusText);
						return false;
					}
			
					// Update the local state with the filtered contacts
					setStore({ contacts: updatedContacts });
			
					return true;
				} catch (error) {
					console.error("Error deleting contact:", error.message);
					return false;
				}
			},
			
		}
		
	};
};

export default getState;
