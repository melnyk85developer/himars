import React from "react";
import './styles.scss';

const Footer = () => {
    return (
        <>
            <footer className="wrapper_footer">
                <div className="footer">
                    <div className="image_footer">
                        <div className="wrapper_sections_footer">
                            <section className="footer_sections">
                                <p>Блок 1</p>
                            </section>
                            <section className="footer_sections">
                                <p>Блок 2</p>
                            </section>
                            <section className="footer_sections">
                                <p>Блок 3</p>
                            </section>
                            <section className="footer_sections">
                                <p>Блок 4</p>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="niz_footera">	
                    <p>Сайт работает на: <a href="/">NK_CMS</a> Все права защищены!</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;