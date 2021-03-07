import React from 'react'
// import PropTypes from 'prop-types'

function auth(props) {

    return (

        <section className="section is-large">
            <div className="container">
                <div className="columns">

                    <div className="column is-three-fifths">
                        <h1 className="title">Welcome to Phone book</h1>
                        <h2 className="subtitle">
                            A simple application for save your contacts. <strong>Family, friends and coworkers. 🤙</strong>
                        </h2>
                    </div>
                    
                    <div className="column">
                    <div className="card">
<div className="card-head">
    <p className="card-header-title is-size-2 has-text-primary is-capitalized">
        login
    </p>
</div>
<div className="card-content">
    <div className="content columns">
        {/* <div className="control column">
            <span>Email:</span>
            <input className="input is-hovered" type="email" placeholder="type your email" maxLength="35" name="email" />
        </div> */}
        <div className="control column">
            <span>password:</span>
            <input className="input is-hovered" type="password" placeholder="type your password" maxLength="35" name="password" />
        </div>
    </div>
    <div className="mt-6">
        <div className="columns is-desktop">
            <div className="column">
               <button className="button is-primary button-size is-hovered">logIn</button>
            </div>
            <div className="column">
                <button className="button is-primary button-size is-outlined">Sign In</button>
            </div>
        </div>
    </div>
    <div className="mt-3">
        <div className="columns is-desktop">
            <div className="column is-4 is-offset-8">
               <button className="button is-white">
                   Forgot password?
               </button>
            </div>
        </div>
    </div>
</div>
</div>

                    </div>

                </div>

            </div>
        </section>

        // <div className="container">

        // </div>
    )
}

// auth.propTypes = {

// }

export default auth

