import React from "react";
import "./style.css";
export class Card extends React.Component {
	render() {
		const {data: {src, title}} = this.props;
		return <div className="card">
			<img src={src} alt="Image" />
			<h3>{title}</h3>
		</div>
	}
} 
export default Card;