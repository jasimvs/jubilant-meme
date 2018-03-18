import React from "react"
import PropTypes from "prop-types"

const Sidebar = (props) => {

  const onclick = (name, username) => {
    console.log('onclick', name, username);
    props.dispatch(name, username)
  }

  return (
    <aside id="sidebar" className="sidebar">
        <h2>Users</h2>
        <ul>
            {console.log('sidebarrrr',props)}{props.users.map(user => (
                <li key={user.id}>
                  <a href='#' onClick={() => onclick(user.name, props.username)}>{user.name}</a>
                </li>
            ))}
        </ul>
    </aside>
  )
}
Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar