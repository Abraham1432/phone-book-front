import React from 'react'
// import PropTypes from 'prop-types'

function addContacts(props) {
    return (
        
        <div className="card">
        <div className="card-head">
            <p className="card-header-title is-capitalized">
                Creat contact
            </p>
        </div>
        <div className="card-content">
            <div className="content columns is-desktop is-multiline">
                <div className="control column">
                    <span>First Name:</span>
                    <input className="input is-hovered" type="text" placeholder="type your Name" maxLength="35" name="name" />
                </div>
                <div className="control column">
                    <span>Last Name:</span>
                    <input className="input is-hovered" type="text" placeholder="type your last Name" maxLength="35" name="lastName" />
                </div>
                <div className="control column">
                    <span>Phone:</span>
                    <input className="input is-hovered" type="text" placeholder="type your Phone" maxLength="35" name="phone" />
                </div>
            </div>
            <div className="mt-6">
                <div className="columns is-desktop">
                    <div className="column is-5">
                       <button className="button is-primary button-size is-hovered">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

// addContac.propTypes = {

// }

export default addContacts

