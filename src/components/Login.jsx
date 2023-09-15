import React, { useState } from "react";

export function Login() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState(""); 

    const login = async (e) => {
        e.preventDefault();
        let iniciarSesion = { correo, password };
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Version": "1.0.0"
            },
            body: JSON.stringify(iniciarSesion)
        };
        
        try {
            let res = await fetch("http://127.10.10.10:5000/login", requestOptions);
            if (res.ok) {
                const jotason = await res.json();
                console.log(jotason);
                alert("Se inicio sesión con éxito");
                setCorreo("");
                setPassword("");
            } else {
                alert("Correo o contraseña incorrecta");
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
                            <h1 className="text-center">Login</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <label htmlFor="correoIniciar">Correo</label>
                                    <input
                                        type="text"
                                        id="correoIniciar"
                                        className="form-control"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordIniciar">Password</label>
                                    <input
                                        type="password"
                                        id="passwordIniciar"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-danger">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
