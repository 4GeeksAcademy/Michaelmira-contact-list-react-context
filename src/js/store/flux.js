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
		}
		
	};
};

export default getState;
