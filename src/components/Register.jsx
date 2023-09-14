import React, { useState } from "react";

export function Register() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState(""); 

    const registrar = async (e) => {
        e.preventDefault();
        let registrarse = { correo, password };
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Version": "1.0.0"
            },
            body: JSON.stringify(registrarse)
        };
        
        try {
            let res = await fetch("http://127.10.10.10:5000/user", requestOptions);
            if (res.ok) {
                const jotason = await res.json();
                console.log(jotason);
                alert("Se agregó el usuario con éxito");
                setCorreo("");
                setPassword("");
            } else {
                console.error("Error al registrar usuario");
                setCorreo("");
                setPassword("");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setCorreo("");
            setPassword("");
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registrar}>
                <label htmlFor="correoRegistrar">Correo</label><br />
                <input
                    type="text"
                    id="correoRegistrar"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                /><br /><br />
                <label htmlFor="passwordRegistrar">Password</label><br />
                <input
                    type="password"
                    id="passwordRegistrar"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de contraseña
                /><br /><br />
                <button type="submit">Registrar User</button>
            </form>
        </div>
    )
};
