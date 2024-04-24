const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]

		},
		actions: {
			getContacts:()=>{
				fetch(process.env.BACKEND_URL + "/agendas/michaelmira/contacts")
				.then(resp=>resp.json())
				.then(data=>setStore({contacts:data.contacts}))
			},
			editContact: async(contact) =>{
				let opt = {
					method:"PUT",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)

				}
				try{
					let response = await fetch(process.env.BACKEND_URL+"/agendas/michaelmira/contacts/"+contact.id , opt)
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
					let response = await fetch(process.env.BACKEND_URL + "/agendas/michaelmira/contacts", opt)
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
			deleteContact: async (contactId) => {
				let opt = {
					method: "DELETE",
					headers: {"Content-type": "application/json" },
				};
				try {
					let response = await fetch(process.env.BACKEND_URL + "/agendas/michaelmira/contacts/" + contactId, opt);
					if(response.ok) {
				getActions().getContacts()
							return true;
						} else {
						return false;
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			},
		},
		
	};
};

export default getState;
