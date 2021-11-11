import React from 'react';
import PropTypes from 'prop-types';

import '../CurrencyInput.css'

function CurrencyInput(props) {
    // console.log(props.currencies);
    return (
        <div className="group">
            <input type="text"
                   value={props.amount}
                   onChange={ev => props.onAmountChange(ev.target.value)}/>
            <select
                // options={props.currencies}
                value={props.currency}
                onChange={ev => props.onCurrencyChange(ev.target.value)}
            >
                {props.currencies.map((curr => (
                        <option key={curr} value={curr} >  {curr} </option>
                )))}
            </select>


        </div>
    );
}

CurrencyInput.protoTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func
}

export default CurrencyInput;