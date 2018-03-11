import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import channels from "./channels"
import channel from "./channel"

const chat = combineReducers({
    users,
    messages,
    channels,
    channel
});

export default chat