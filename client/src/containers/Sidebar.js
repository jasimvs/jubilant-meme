import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users.filter(user => user.name != null)
}), {})(SidebarComponent)