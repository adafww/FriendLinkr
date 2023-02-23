import React from "react";
import './FooterStyle.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>© 2023 MyApp. Все права защищены.</p>
                        <p>Версия приложения: 1.0.0</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;