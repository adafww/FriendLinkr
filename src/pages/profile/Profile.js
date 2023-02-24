import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileStyle.css';

const Profile = () => {
    const [userData, setUserData] = useState();

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
                setUserData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserData();
    }, []);

    return (
        <>
            {userData ? (
                <div className="profile-container">
                    <div className='profile-photo-container'>
                    <img src={userData.photo} alt="User avatar" className="user-avatar" />
                    </div>
                    <div className="profile-header">
                    <div className="user-info">
                        <div className="user-details">
                            <p>Имя: {userData.first_name}</p>
                            <p>Фамилия: {userData.last_name}</p>
                            <p>E-mail: {userData.email}</p>
                            <p>Дата регистрации: {new Date(userData.reg_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    </div>
                </div>

            ) : (
                <>Loading</>
            )}
        </>

    );
};

export default Profile;