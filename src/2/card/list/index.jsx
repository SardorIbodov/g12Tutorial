import React from "react";

class List extends React.Component {
  render() {
    const { data } = this.props;
    return <div>
			{data.map(user => {
				return <h2>{user.id}. {user.fullName}</h2>
			})}
		</div>;
  }
}

export default List;
