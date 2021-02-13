import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div style={ { minHeight: '100vh' } } className='d-flex flex-row justify-content-center align-items-center w-100'>
        <img alt='loading gif' src='https://media.tenor.com/images/b9a8a11d339ad5960c3dd515b5095569/tenor.gif' />
      </div>
    );
  }
}
