import React from 'react'

export default function Button({ context }) {
  return (
    <div>
     <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-outline-danger ">{context}</button>
      </div>
    </div>
  )
}
