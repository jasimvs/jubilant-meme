import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author, channel) => {
    dispatch(addMessage(message, author, channel))
  }
})

export const AddMessage = connect((state) => ({channel: state.channel}), mapDispatchToProps)(AddMessageComponent)
