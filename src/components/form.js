import React from 'react';

const Form = props => (
    <form onSubmit = {props.getweather}>
                <input type="text" name="city" placeholder="city..." />
                <input type="text" name="country" placeholder="country..." />
                <button>Get weather</button>
            </form>
);
export default Form;