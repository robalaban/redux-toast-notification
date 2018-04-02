import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Notify from './Notify'
import { removeToast } from './actions'

import './toast.scss'

const mapStateToProps = state => ({ notifications: state.api.notifications })
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeToast: removeToast
    },
    dispatch
  )

@connect(mapStateToProps, mapDispatchToProps)
class Notifications extends Component {
  static propTypes = {
    removeToast: PropTypes.func,
    notifications: PropTypes.array
  }

  render () {
    const removeToast = this.props.removeToast
    const notifications = this.props.notifications
    return (
      <ul className='toasts'>
        {notifications.map(toast => {
          return <Notify {...toast} key={toast.uuid} onDismissClick={() => removeToast(toast.uuid)} />
        })}
      </ul>
    )
  }
}

export default Notifications
