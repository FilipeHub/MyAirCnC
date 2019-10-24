import React, { useState } from 'react';


export default function New(){
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    
    function handleSubmit(){
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">EMPRESA</label>
            <input 
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            
            <label htmlFor="techs">TECNOLOGIAS <span>Separadas por vírgula</span></label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            
            <label htmlFor="price">VALOR DA DIÁRIA<span>Em branco para grátis</span></label>
            <input 
                id="price"
                placeholder="Qual o preço da diária na sua empresa"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />


        </form>

    );
}