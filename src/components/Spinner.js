import React, { Component } from 'react'
import Book from './Book.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={Book} alt="Loading" />
      </div>
    )
  }
}
