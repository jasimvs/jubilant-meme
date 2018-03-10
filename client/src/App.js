import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { ChannelsSidebar } from "./containers/ChannelsSidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { CreateChannel } from "./containers/CreateChannel"

class App extends Component {
  render() {
    console.log(this.props); 
    const username = this.props.username;
    return (
      <div id="container">
        <section id="side">
          <Sidebar />
        </section>
        <section id="main">
          <MessagesList />
          <AddMessage username={username}/>
        </section>
          <section id="side-2">
              <CreateChannel />
              <ChannelsSidebar />
          </section>
      </div>
    );
  }
}

export default App;

