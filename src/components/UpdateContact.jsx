import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const UpdateContact = () => {
    const { userId } = useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")

    const editContact = async (evento ) => {
        const url = `https://playground.4geeks.com/contact/agendas/ricardo/contacts/${userId}`
        evento.preventDefault() 

        try {
            const resp = await fetch(url, {
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


    return (<div>
        <div className="text-center mt-5">
            <h1> Update contact </h1>
        </div>

        <div className="container-fluid col-5">
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Full name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="inputName" placeholder="Full Name" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="inputEmail3" placeholder="email" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="inputAddress" placeholder="Address" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} id="inputPhone" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button  className="btn btn-primary" onClick={editContact}>Edit Contact</button>
                </div>
                <div>
                    <Link to={"/"}>
                        <p> Go back to Home </p>
                    </Link >
                </div>

            </form>
        </div>
    </div>
    )
}

export default UpdateContact