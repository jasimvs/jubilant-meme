import React from "react"
import PropTypes from "prop-types"

const ChannelsSidebar = ({ channels }) => (
    <aside id="sidebar" className="sidebar">
        <h2>Channels</h2>
        <ul>
            {channels.map(channel => (
                <li>{channel.name}</li>
            ))}
        </ul>
    </aside>
)

ChannelsSidebar.propTypes = {
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ChannelsSidebar