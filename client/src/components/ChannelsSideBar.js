import React from "react"
import PropTypes from "prop-types"

const ChannelsSidebar = (props) => {

  const onclick = (name) => {
    console.log('onclick', name, props);
    props.dispatch(name)
  }

  return (
    <aside id="sidebar" className="sidebar">
        <h2>Channels</h2>
        <ul>
            {console.log('3ChannelsSidebar')}
            {console.log(props)}{props.channels.map(channel => (
                <li key={channel.id} >
                  <a href='#' onClick={() => onclick(channel.name)}>{channel.name}</a>
                </li>
            ))}
        </ul>
    </aside>
  )
}


ChannelsSidebar.propTypes = {
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ChannelsSidebar