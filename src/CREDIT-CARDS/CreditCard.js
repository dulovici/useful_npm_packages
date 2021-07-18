import React, {useState} from 'react';
import './creditCard.scss';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';

export const CreditCard = () => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    

    return (
        <div className='credit-card'>
            <Cards 
            number={number}
            name={name}
            xpiry={expiry}
            cvc={cvc}
            focused={focus}
            />

            <form>
                <input 
                type='tel' 
                name='number' 
                placeholder='Card Number' 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
                onFocus={(e) => setFocus(e.target.name)}
                />
                <input 
                type='text' 
                name='name' 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onFocus={(e) => setFocus(e.target.name)}
                />
                <input 
                type='text' 
                name='expiry' 
                placeholder='MM/YY' 
                value={expiry} 
                onChange={(e) => setExpiry(e.target.value)} 
                onFocus={(e) => setFocus(e.target.name)}
                />
                <input 
                type='tel' 
                name='cvc' 
                placeholder='CVC' 
                value={cvc} 
                onChange={(e) => setCvc(e.target.value)} 
                onFocus={(e) => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}


//  https://www.npmjs.com/package/react-credit-cards  CREDIT-CARDS DOSUMENTATION;