import React, { useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const username = localStorage.getItem('username');

    const getHeaders = () => {
        const token = localStorage.getItem('token');
        return { Authorization: `${token}` };
    }

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(
                    `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/v1/users/me`,
                    { headers: getHeaders() }
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserData();
    }, []);

    return (
        <div>
            <h2>Профиль пользователя {username}</h2>
            <p>Здесь можно отобразить дополнительную информацию о пользователе.</p>
        </div>
    );
};

export default Profile;