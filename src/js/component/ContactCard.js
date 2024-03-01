import React, { useState, useContext}  from "react";
import { Context } from "../store/appContext";




export const ContactCard = ({contact}) => {

	const {store, actions } = useContext(Context)

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://picsum.photos/200/300"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button
							className="btn"
							// onClick={() => props.onUpdate(props.contact)}
							>
							<i className="fas fa-pencil-alt mr-3"></i>
						</button>
						<button
							className="btn"
							// onClick={() => props.onDelete()}
							>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
					<label className="name lead">
						
    						<div>{contact.full_name}</div>
						
					</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3"></i>
					<span className="text-muted">
						{contact.address}
						</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"></span>
					<span className="text-muted small">{contact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""></span>
					<span className="text-muted small text-truncate">
						{contact.email}
					</span>
				</div>
			</div>
		</li>
	);
};
