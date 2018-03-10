import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ users }) => (
    <aside id="sidebar" className="sidebar">
        <h2>Users</h2>
        <ul>
            {console.log(users)}{users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar