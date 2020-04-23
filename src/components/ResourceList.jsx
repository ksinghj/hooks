import React from "react";

class ResourceList extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    let res = await window.fetch(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    let data = await res.json();
    this.setState({ resources: data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      let res = await window.fetch(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      let data = await res.json();
      this.setState({ resources: data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
