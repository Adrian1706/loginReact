import React from "react";

export function Register(){

    const registrar = async (e) =>{
        e.preventDefault();
        let correo = document.querySelector("#correo").value;
        let password = document.querySelector("#password").value;
        let registrarse = { correo, password };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registrarse)
        };
        let res = await fetch("http://127.10.10.10:5050/register", requestOptions);
        const jotason = await res.json();
        console.log(jotason); 
    }
    return(

        <div>
            <h1>Register</h1>
            <form onSubmit={registrar}>
                <label htmlFor="">Correo</label><br />
                <input type="text" name="correo" id="correoRegistrar"/><br /><br />
                <label htmlFor="">Password</label><br />
                <input type="text" name="password" id="passwordRegistrar"/><br /><br />
                <button type="submit">Registrar User</button>
            </form>
        </div>

    )
    



};