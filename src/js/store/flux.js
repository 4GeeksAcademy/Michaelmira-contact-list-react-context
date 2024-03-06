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
					let response = await fetch(process.env.BACKEND_URL, opt)
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
		}
		
	};
};

export default getState;
