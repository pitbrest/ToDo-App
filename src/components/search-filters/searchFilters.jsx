import React, { Component } from 'react';
import { Button } from '../button/Button';

class SearchFilters extends Component {

  state = {
    activateBtn: 'All'
  };

  btnHandler = (status) => {
    this.setState({
      activateBtn: status
    });
    this.props.filtersHandler(status);
  };

  render() {
    return (
      <>
        <Button label='All' classes={this.state.activateBtn === 'All' ? 'btn btn-warning' : 'btn btn-outline-secondary'}
          handler={() => this.btnHandler('All')} />
        <Button label='Active' classes={this.state.activateBtn === 'Active' ? 'btn btn-warning' : 'btn btn-outline-secondary'}
          handler={() => this.btnHandler('Active')} />
        <Button label='Done' classes={this.state.activateBtn === 'Done' ? 'btn btn-warning' : 'btn btn-outline-secondary'}
          handler={() => this.btnHandler('Done')} />
      </>
    );
  }
}

export { SearchFilters };

// 'btn btn-warning'