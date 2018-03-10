import React from "react"
import PropTypes from "prop-types"

const ChannelsSidebar = ({ channels }) => (
    <aside id="sidebar" className="sidebar">
        <h2>Channels</h2>
        <ul>
            {console.log('3ChannelsSidebar')}
            {console.log(channels)}{channels.map(channel => (
                <li key={channel.id}>{channel.name}</li>
            ))}
        </ul>
    </aside>
)

ChannelsSidebar.propTypes = {
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ChannelsSidebar