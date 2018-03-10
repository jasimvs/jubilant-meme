import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { ChannelsSidebar } from "./containers/ChannelsSidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {
  render() {
    console.log(this.props); 
    const username = this.props.username;
    return (
      <div id="container">
        <section id="side">
          <Sidebar />
          <ChannelsSidebar />
        </section>
        <section id="main">
          <MessagesList />
          <AddMessage username={username}/>
        </section>
      </div>
    );
  }
}

export default App;

