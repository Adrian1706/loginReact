import React from "react";

export function Register() {
    const registrar = async (e) => {
        e.preventDefault();
        let correo = document.querySelector("#correoRegistrar").value;
        let password = document.querySelector("#passwordRegistrar").value;
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
            } else {
                console.error("Error al registrar usuario");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registrar}>
                <label htmlFor="correoRegistrar">Correo</label><br />
                <input type="text" id="correoRegistrar" /><br /><br />
                <label htmlFor="passwordRegistrar">Password</label><br />
                <input type="password" id="passwordRegistrar" /><br /><br />
                <button type="submit">Registrar User</button>
            </form>
        </div>
    )
};
