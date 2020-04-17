import React, { Component } from 'react';
import { team } from '../../../data';

const InfoContext = React.createContext();

class TeamProvider extends Component {
  state = {
    info: team
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const TeamConsumer = InfoContext.Consumer;
export { TeamProvider, TeamConsumer };
