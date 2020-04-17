import React, { Component } from 'react'
import {TeamConsumer} from './TeamContext'
import TeamInfo from './TeamInfo'

export default class extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <TeamConsumer>
            {value => {
              return value.info.map(item => {
                return <TeamInfo key={item.id} item={item} />;
              });
            }}
          </TeamConsumer>
        </div>
      </div>
    )
  }
}
