import React, { useState } from 'react';
import './contactform.css'
import TextButton from '../TextButton/TextButton';
const Contactform:React.FC=()=>{
    const [bericht, setBericht] = useState({
        username: '',
        email: '',
        message: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBericht(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('ur mes submited sussufly');
    };
    return (
        <>
        <form action="" id='contactform' onSubmit={handleSubmit}>
            <label htmlFor="username">Voornaam</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder='Jonny Mark'
                value={bericht.username}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">E-mailadres</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='info@voorbeeld.nl'
                value={bericht.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Bericht</label>
            <textarea
                id="message"
                name="message"
                placeholder='Type hier je bericht'
                value={bericht.message}
                onChange={handleChange}
                required
            />
            <TextButton 
            text={'verstuur'}
                link={''}
                type="submit" 
            /> 
        </form>
    </>
    )
}
export default Contactform