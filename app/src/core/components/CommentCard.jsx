import React from "react"
import { convertMsToLocalDate } from 'Core/helpers/functions/timeAndDate'


const CommentCard = ({ data: { id, userId, content, createdAt, } }) => {
	return (
		<>
			{id &&
				<div className={`card list-group-item list-group-item-action border-dark border-top mb-2`}>
					<div className="card-body">
						<div className="d-flex justify-content-between">
							<h5 className="card-title">{userId}</h5>
							{createdAt && <time dateTime="2018-07-07">{convertMsToLocalDate(createdAt)}</time>}
						</div>
						<p className="card-text">{content}</p>
					</div>
				</div>
			}
		</>
	);
};

export default CommentCard;