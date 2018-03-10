import { connect } from 'react-redux'
import ChannelsSidebarComponent from '../components/ChannelsSideBar'

export const ChannelsSidebar = connect(state => ({
    channels: state.channels
}), {})(ChannelsSidebarComponent)