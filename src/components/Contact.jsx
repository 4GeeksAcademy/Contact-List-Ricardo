import React from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Contact = ({ contactinfo }) => {
	const { id, name, phone, email, address } = contactinfo
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


	const deleteUser = async (contact_id) => {
		const deleteUrl = `https://playground.4geeks.com/contact/agendas/ricardo/contacts/${contact_id}`

		try {
			const resp = await fetch(deleteUrl, { method: "DELETE" });
			if (!resp.ok) {
				throw new Error(`Error: ${resp.statusText} (status code: ${resp.status})`);
			}

			callContact();

			/*Ejecutar dispatch */


		} catch (error) {
			console.log(`There has been an error, ${error}`)
		}

	}

	const updateUser = async (contact_id) => {
		const urlUpdate = `https://playground.4geeks.com/contact/agendas/ricardo/contacts/${contact_id}`
		try {
			const resp = await fetch(urlUpdate, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					phone: number,
					email: email,
					address: address,
				})
			})
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

	return (
		<div className="card mb-3 col-5 d-flex justify-content-center" >
			<div className="row g-0 d-flex justify-content-center">
				<div className="col-md-3">
					<img src="https://picsum.photos/200/300" className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-7">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{address}</p>
						<p className="card-text">{phone}</p>
						<p className="card-text">{email}</p>
					</div>
				</div>
				<div className="col-md-2">
					<button type="button" class="btn "><i class="fa-solid fa-pencil"></i></button>
					<button type="button" onClick={() => deleteUser(id)} class="btn "><i class="fa-solid fa-trash"></i></button>
				</div>
			</div>
		</div>
	)

}