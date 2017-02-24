import React, { Component } from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force'
import _ from 'lodash'

const data = {
  nodes: [
    {
      id: 'Elevate',
      fill: 'orange'
    },
    {
      id: 'Lookup',
      fill: 'blue'
    },
    {
      id: 'EP',
      fill: 'red'
    },
  ],
  links: [
    {
      source: 'Elevate',
      target: 'Lookup',
      value: 5
    },
    {
      source: 'Lookup',
      target: 'EP',
      value: 25
    },
  ],
}

class App extends Component {
  render() {
    return (
      <InteractiveForceGraph simulationOptions={{ height: 500, width: 500 }}>
        {this.renderNodes(data.nodes)}
        {this.renderLinks(data.links)}
      </InteractiveForceGraph>
    );
  }

  renderNodes(nodes) {
    return _.map(nodes, node => {
      const { id, fill } = node
      return (
        <ForceGraphNode
          key={id}
          node={{ id }}
          fill={fill}
        />
      )
    })
  }

  renderLinks(links) {
    return _.map(links, (link, index) => <ForceGraphLink key={index} link={link} /> )
  }
}

export default App;
