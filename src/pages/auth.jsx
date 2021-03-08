import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { dataInputs } from "../config/dataInputs";
import CardAuth from "../components/authComponents/cardAuth";


const Auth = ({viewId}) => {

    const [view, setview] = useState([]);
            
        const handleView = (id) =>{

            let authView =  dataInputs.find(I => I.id === id );

            if(authView){
                setview(authView)
            }
        }
    

    useEffect(() => {

        handleView(viewId);
    
    },[viewId])

    return (

    <section className="section is-medium">
        <div className="container">
            <div className="columns">

                <div className="column">
                    <h1 className="title">Welcome to Phone book</h1>
                    <h2 className="subtitle">
                        A simple application for save your contacts. <strong>Family, friends and coworkers. 🤙</strong>
                    </h2>
                </div>

                <div className="column is-4">
                    <div className="card">
                        <div className="card-head">
                            <p className="card-header-title is-size-2 has-text-primary is-capitalized">
                                {view.title}
                            </p>
                        </div>

                        <div className="card-content">

                            {view.title && <CardAuth dataInpus={view.inputs} title={view.title} />}

                            <div className="columns is-desktop mt-3">
                                <div className="column">
                                    {view.title  === "login" ? 
                                    
                                        <button className="button is-primary button-size is-outlined"
                                         onClick={ () => handleView(2)}>
                                            Sign In
                                        </button>
                                    
                                    : 
                                        <button className="button is-primary button-size is-outlined"
                                         onClick={ () => handleView(0)}>
                                            Login
                                        </button>
                                    
                                    }

                                </div>
                                {view.title  === "login" &&  
                                    <div className="column">
                                        <button className="button is-primary button-size is-outlined"
                                         onClick={ () => handleView(1)}>
                                            Forgot password?
                                        </button>
                                    </div>
                                }
                            </div>

                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </section>   

    )
}

Auth.propTypes = {
    viewId:PropTypes.bool.isRequired
}

export default Auth

