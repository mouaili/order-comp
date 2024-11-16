import React from 'react';

const countHits = (WrappedComponent, power) => {
  class CountHits extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hits: 0,
      };
    }

    addOnePoint = () => {
      this.setState(prevState => {
        return {
          hits: prevState.hits + 1,
        };
      });
    };

    componentDidUpdate = (prevProps, prevState) => {
      if (this.state !== prevState) {
        const ComponentPlayer = WrappedComponent.name;
        this.props.reduceLife(ComponentPlayer, power);
      }
    };

    render() {
      return (
        <WrappedComponent
          hits={this.state.hits}
          addOnePoint={this.addOnePoint}
          {...this.props}
        />
      );
    }
  }

  return CountHits;
};

export default countHits;
