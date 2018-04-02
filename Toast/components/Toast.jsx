import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toast extends Component {
  static propTypes = {
    color: PropTypes.string,
    onDismissClick: PropTypes.func,
    text: PropTypes.string
  }

  constructor (props) {
    super(props)
    // TODO: Add display: block on setTimeout
    setTimeout(function () {
      props.onDismissClick()
    }, 3000)
  }

  render () {
    const { color, onDismissClick, text } = this.props
    return (
      <li className='toast' style={{ backgroundColor: color }}>
        <p className='toast--content'>{text}</p>
        <button className='toast--dismiss' onClick={onDismissClick}>
          <Icon name='remove' size='large' />
        </button>
      </li>
    )
  }
}

export default Toast
