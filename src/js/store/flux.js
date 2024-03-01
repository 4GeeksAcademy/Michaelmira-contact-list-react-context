const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts [

			]

		},
		actions: {
			getContacts:()=>{
				fetch(process.env.BACKEND_URL+"/agenda/michaelmira")
				.then(resp=>resp.json())
				.then(data=>setStore({contacts:data}))
			},
			editContact: () +>{

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
						let newContacts = getStore().contacts.concat(contact)
						setStore({contacts: newContacts})
						return true
					}
				}
			}
		}
		
	};
};

export default getState;
