import React from 'react'
// import PropTypes from 'prop-types'

import AddContacts from "../components/home/addContacts";

const home = (props) => {
    return (
        <>
            <nav className="navbar is-primary">
                <div className="navbar-brand">
                    <p className="navbar-item">
                        Phone book App
                    </p>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <p>Abraham Gómez</p>
                        </div>
                        <div className="navbar-item">
                            <button className="button is-white">Log in</button>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">
                         Contacts
                    </p>
                    <button className="button is-primary">Creat contact</button>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    
                    <div className="columns is-desktop">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        {/* <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <div className="home-card-capitalLetter">
                                            A
                                        </div>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">John Smith</p>
                                        <p className="subtitle is-6">8124683901</p>
                                    </div>
                                    <div className="media-right is-hidden-mobile">
                                        <button className="button is-primary mr-2">
                                            Edit
                                        </button>
                                        <button className="button is-danger">
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <footer className="card-footer is-hidden-tablet">
                                <button className="button card-footer-item is-primary">Edit</button>
                                <button className="button card-footer-item is-danger is-outlined">Delete</button>
                            </footer>
                            </div> */}
                            <AddContacts />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

// home.propTypes = {

// }

export default home

