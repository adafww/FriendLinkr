import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/v1/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Регистрация: {user.registration_date}</p>
                    <p>Последний раз в сети: {user.last_login_date}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;