import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contact } from "../components/Contact.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();



	const callContact = async () => {
		const url = "https://playground.4geeks.com/contact/agendas/ricardo"
		try {
			const resp = await fetch(url)
			if (!resp.ok) {
				throw new Error(`Status ${resp.status}`);
			}
			const data = await resp.json();
			dispatch({
				type: "getContact",
				payload: { getContactList: data.contacts }

			})

		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {

		callContact();
	}, [])


	return (
		<div className="container-fluid" >
			<div className="col-10 d-flex justify-content-end mt-3 " >
				<Link to={"/newContact"} >
					<button type="button" className="btn btn-success">Add new contact</button>
				</Link>

			</div>
			<div className="content mt-5" >
				{
					store.contacts.map((contact) => {
						return <div className="d-flex justify-content-center" key={contact.id} >
							<Contact contactinfo={contact} />
						</div>

					}

					)
				}

			</div>
		</div>


	);
}; 