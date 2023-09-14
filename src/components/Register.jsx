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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Registro</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registrar}>
                                <div className="form-group">
                                    <label htmlFor="correoRegistrar">Correo</label>
                                    <input
                                        type="text"
                                        id="correoRegistrar"
                                        className="form-control"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordRegistrar">Contraseña</label>
                                    <input
                                        type="password"
                                        id="passwordRegistrar"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
