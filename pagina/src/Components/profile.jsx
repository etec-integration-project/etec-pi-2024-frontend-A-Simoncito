import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Profile() {
    const [myRating, setMyRating] = useState([]);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(1);

    const [mySupport, setMySupport] = useState([]);

    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const dialogRef = useRef(null);
    const supportRef = useRef(null);
    
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        dialogRef.current.showModal();
        setIsOpen(true);
    };

    const closeDialog = () => {
        dialogRef.current.close();
        setIsOpen(false);
    };

    const openSupportDialog = () => {
        supportRef.current.showModal();
        setIsOpen(true);
    };

    const closeSupportDialog = () => {
        supportRef.current.close();
        setIsOpen(false);
    };
    
    useEffect(() => {
        const getMyRating = async () => {
            const res = await axios.get("/app/users/my-rating");
            setMyRating(res.data.rating);
        };
        getMyRating();

        const getMySupport = async () => {
            const res = await axios.get("/app/users/user-soporte");
            setMySupport(res.data.support);
        };
        getMySupport();
    }, []);

    const submitRatingForm = (e) => {
        e.preventDefault();
        axios
            .post("/app/users/rate", {
                rating: rating,
                comment: comment,
            })
            .then((res) => res.data)
            .then((res) => {
                if (res.mensaje) {
                    alert(res.mensaje);
                }
            });
    };

    const submitSupportForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/app/users/soporte", {
                email: email,
                content: content,
            });
            setComment('')
            setRating('')
            alert(response.data.mensaje);
        } catch (error) {
            alert("No se pudo enviar el mensaje");
        }
    };

    const submitEditRatingForm = (e) => {
        e.preventDefault()
        axios
            .patch('/app/users/edit-rating', {
                rating_id: myRating.id,
                new_rating: rating,
                new_comment: comment,
            })
            .then((res) => res.data)
            .then((res) => {
                if (res.mensaje) {
                    alert(res.mensaje);
                }
            });
    }

    const submitEditSupportForm = (e) => {
        e.preventDefault()
        axios
            .patch('/app/users/edit-support', {
                support_id: mySupport.id,
                new_email: email,
                new_content: content,
            })
            .then((res) => res.data)
            .then((res) => {
                if (res.mensaje) {
                    alert(res.mensaje);
                }
            });
    }

    const deleteSupport = async () => {
        axios
            .delete(`/app/users/eliminar-incidencia/${mySupport.id}`)
            .then((res) => res.data)
            .then((res) => {
                if (res.mensaje) {
                    alert(res.mensaje);
                }
            });
    };

    return (
        <main>
            <div className="split">
                <section>
                    {(myRating && (
                        
                        <div className="user-rating">
                            <hr />
                            <h2>{myRating.rating}⭐ Estrellas</h2>
                            <p>{myRating.comment}</p>
                            <button className="btn-contact" onClick={openDialog}>Editar</button>
                            <dialog ref={dialogRef}>
                                <form method="POST" onSubmit={submitEditRatingForm}>
                                    <h2>Editar caliicacion</h2>
                                    <label htmlFor="n-comment">Comentario</label>
                                    <input
                                        type="text"
                                        id="n-comment"
                                        name="n-comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required/>
                                    <br/>
                                    <label htmlFor="n-valoracion">Valoracion:</label>
                                    <input
                                        type="text"
                                        id="n-valoracion"
                                        name="n-valoracion"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value) }
                                        required/>
                                    <br/>
                                    <button className="btn-contact" type="submit">Actualizar</button>
                                </form>
                                <button className="btn-contact" type="button" onClick={closeDialog}>Cancelar</button>
                            </dialog>
                        </div>
                        
                    )) || (
                        <form method="POST" onSubmit={submitRatingForm}>
                            <label htmlFor="comment">Comentario:</label>
                            <input
                                type="text"
                                name="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <label htmlFor="rating">Valoracion:</label>
                            <input
                                type="number"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                            <button type="submit">Calificar</button>
                        </form>
                    )}
                </section>
                <div>
                    <h1>Incidencias</h1>
                    <div className="split">
                        <section>
                            {mySupport && (
                                    
                                <div className="user-rating">
                                    <hr />
                                    <h2>{mySupport.email}</h2>
                                    <p>{mySupport.contenido}</p>
                                    <button className="btn-contact" onClick={openSupportDialog}>Editar</button>
                                    <button className="btn-contact" onClick={deleteSupport}>Borrar</button>
                                    <dialog ref={supportRef}>
                                        <form method="POST" onSubmit={submitEditSupportForm}>
                                            <h2>Editar incidencia</h2>
                                            <label htmlFor="n-email">Email:</label>
                                            <input
                                                type="text"
                                                id="n-email"
                                                name="n-email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required/>
                                            <br/>
                                            <label htmlFor="n-content">Contenido:</label>
                                            <input
                                                type="text"
                                                id="n-content"
                                                name="n-content"
                                                value={content}
                                                onChange={(e) => setContent(e.target.value) }
                                                required/>
                                            <br/>
                                            <button className="btn-contact" type="submit">Actualizar</button>
                                        </form>
                                        <button className="btn-contact" type="button" onClick={closeSupportDialog}>Cancelar</button>
                                    </dialog>
                                </div>
                                
                            ) || (
                                
                                <form onSubmit={submitSupportForm}>
                                    <h2>Contactanos</h2>
                                    <label htmlFor="supportEmail">Email:</label>
                                    <input
                                        type="text"
                                        id="supportEmail"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <br />
                                    <label htmlFor="content">Contenido:</label>
                                    <input
                                        type="text"
                                        id="content"
                                        name="content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                    />
                                    <br />
                                    <button className="btn-contact" type="submit">
                                        Enviar
                                    </button>
                                </form>

                            )}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
