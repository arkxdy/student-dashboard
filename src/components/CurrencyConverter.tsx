import { useState } from "react";
import useCurrencyInfo from '../hooks/useCurrencyInfo';
//import CurrencyInputBox from './CurrencyInputBox';
const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);
    
    //const currencyInfo:any =  useCurrencyInfo(from);
    //console.log(currencyInfo);
    //const options:any = Object.keys(currencyInfo[to]);

    const convert = () => {
        setConvertedAmount(amount * Number(5));
    }
    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    return (
        <div className="bg-red opacity-50">
            <div>
            <div className="w-full mb-1">
                        
                    </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    convert()
                }}>
                    <div className="w-full mb-1">
                        <button onClick={() => swap}>Swap</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default CurrencyConverter;