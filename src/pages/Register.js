import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
    const API_HOST = process.env.REACT_APP_API_HOST;
    const API_PORT = process.env.REACT_APP_API_PORT;
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [code, setCode] = useState('');
    const [codeId, setCodeId] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        const getCaptcha = async () => {
            try {
                const response = await axios.get('http://' + API_HOST + ':' +
                    + API_PORT + '/api/v1/account/register');
                        setCodeId(response.data.id);
                        setImage(`data:image/png;base64,${response.data.image}`);
            } catch (error) {
                console.error(error); // здесь можно обработать ошибку
            }
        }
        getCaptcha();
    }, []);
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('http://' + API_HOST + ':' +
                + API_PORT + '/api/v1/account/register', {
                email, firstPassword, secondPassword, firstName, lastName, code, captcha_id: codeId
            });
            console.log(response.data); // здесь можно обработать ответ от бэкэнда
        } catch (error) {
            console.error(error); // здесь можно обработать ошибку
        }
    };

    return (
        <div className="register">
            <h2 className="register__title form__title">Зарегистрируйтесь</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="register-email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="register-firstPassword">Пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        id="register-firstPassword"
                        value={firstPassword}
                        onChange={(e) => setFirstPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="register-secondPassword">Подтверждение пароля</label>
                    <input
                        type="password"
                        className="form-control"
                        id="register-secondPassword"
                        value={secondPassword}
                        onChange={(e) => setSecondPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="register-firstName">Имя</label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="register-lastName">Фамилия</label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {image !== '' && (
                        <img src={image} alt="captcha" />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="register-code">Код</label>
                    <input
                        type="text"
                        className="form-control"
                        id="register-code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                <div className="login__action">
                    <button type="submit" className="btn btn-primary">
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;