import { useState } from "react"

function Signup() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
    })
    const [users, setUsers] = useState([]);
    const url = "http://localhost:5000"

    function handleSubmit(e) {
        // e.preventDefault()
        fetch(`${url}/users`,{...users}, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <h1>Signup Form</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                {/* <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input> */}
                <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup