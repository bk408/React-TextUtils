import React from 'react'

function Alert(props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="Alert">
        {props.Alert}
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert
