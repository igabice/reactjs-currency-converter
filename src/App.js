
import './App.css';
import CurrencyInput from "./component/CurrencyInput";
import {useState, useEffect} from 'react';
import axios from  'axios';


function App() {

    const currencyURL = 'http://data.fixer.io/api/latest?access_key=07696e1a379f7034b73ae179d1283caf';

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('EUR')
    const [rates, setRates] = useState([])

    useEffect(() =>{
        axios.get(currencyURL).then(response =>{
            // console.log(Object.keys(response.data.rates));
            setRates(response.data.rates );
        });
    }, []);

    // useEffect(() =>{
    //     if (!!rates){
    //         handleAmount1Change(1);
    //     }
    //
    // }, [rates])


    function format(num){
        return num.toFixed(4);
    }

    function handleAmount1Change(amount1) {
        console.log(amount1 * rates[currency2]/rates[currency1])
        setAmount2(format(amount1 * rates[currency2]/rates[currency1]))
        setAmount1(amount1);
    }

    function  handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2]/rates[currency1]))
        setCurrency1(currency1)

    }
    function handleAmount2Change(amount2) {
        console.log(amount2 * rates[currency1]/rates[currency2])
        setAmount1(format(amount2 * rates[currency1]/rates[currency2]))
        setAmount2(amount2);
    }

    function  handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1]/rates[currency2]))
        setCurrency2(currency2)

    }

  return (
    <div>
        <h1>Currency Converter</h1>
      <CurrencyInput
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
      />
      <CurrencyInput
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change} />

    </div>
  );
}

export default App;
