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
			}
		}
		
	};
};

export default getState;
