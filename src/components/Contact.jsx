

export const Contact = ({contactinfo}) =>{
	const {name, phone, email, address} = contactinfo

    return(
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
					<button type="button" class="btn "><i class="fa-solid fa-trash"></i></button>
				</div>
			</div>
		</div>
    )

}