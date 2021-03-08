import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types'
import { useForm, } from 'react-hook-form';

const  CardAuth = ({dataInpus,title}) =>  {

const { register, handleSubmit } = useForm();

const [inputs, setinput] = useState([""]);


useEffect(() => {

    setinput(dataInpus);

},[dataInpus,inputs])

const onSubmit = data => console.log(data,"this is data!");

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
         <div className="content columns is-multiline">

            {
                inputs.length === 0 ? "cargando..." :
                inputs.map(Inp => (
                    <div className="column is-12" key={Inp.id}>
                        <span>{Inp.name}:</span>
                        <input ref={register({ required: true})}
                        className="input is-hovered" 
                        type={Inp.type} 
                        placeholder={Inp.placeholder}
                        name={Inp.name} />
                    </div>
                ))
            }

        </div>
         <div className="mt-6">
            <div className="columns">
                <div className="column">
                    <button className="button is-primary button-size is-hovered" type="submit">{title}</button>
                </div>
            </div>
         </div>
        </form>
    )
}

CardAuth.propTypes = {

    dataInpus:PropTypes.isRequired,
    title:PropTypes.string.isRequired

}

export default CardAuth

