import React, {useState} from 'react'

let Sign_up=()=> {
    const[user,setUser]=useState({email:'', password:'', naame:'', lastName:'', phone:''});
     
     let formDetails=[
        {c1:'User[email]',      c2:'USer Email',        c3:'email',    c4:'email'},
        {c1:'User[password]',   c2:'User Password',     c3:'password', c4:'password'},
        {c1:'User[first_name]', c2:'User First name',   c3:'naame',    c4:'text'},
        {c1:'User[Last_name]',  c2:'User Last name',    c3:'lastName', c4:'text'},
        {c1:'User[phone]',      c2:'User Phone number', c3:'phone', c4:'number'}
    ] 

    let eventHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }


    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user);
        
    };

    let table=(form,index)=>{
        return(
        <tr  key={index}>
            <td>
                <p>{form.c1}</p>
            </td>
            <td>
                <input name={form.c3} onChange={eventHandler} type={form.c4} placeholder="(required)" required/>
            </td>
            <td>
                <p>{form.c2}</p>
            </td>
        </tr>
        )
    }    

return (
    <div className="container mt-5">
        <div className='row'>
            <div className="col">
            <section className="p-3 bg-warning">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className="h3">
                            <h3>Registration Details</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <form onSubmit={submitHandler}>
                    <table  className='table'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Parameter</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                                {formDetails.map(table)}
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            
                        </tbody>
                    </table>
                </form>
            </section>
                
                
            </div>
        </div>
    </div>
)
}

export default Sign_up
