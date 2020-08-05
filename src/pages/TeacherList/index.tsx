import React from 'react';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-1/p200x200/101692147_2992174970868530_8375546785409531904_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_eui2=AeGLcVzcjhEqpwEMOMnIwT05BmFQSShOf5IGYVBJKE5_kgxY5HdRlhyqoObDcKcNCmZy5Nz-i3Nsm50mSnyQEw29&_nc_ohc=xyZXuNe1bckAX9OKdES&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=5d3eab2749c2201dbcca14c7f140e543&oe=5F4EA5D4" alt="Rodrigo Moraes"/>
                        <div>
                            <strong>Rodrigo Moraes</strong>
                            <span>Web Design</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta de tecnologia e desenvolvimento web.
                    </p><br/><br/>
                    <p>Apaixonado por desenvolvimento web e carros.</p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entre em contato"/>
                            Entre em contato
                        </button>
                    </footer>

                </article>
            </main>
        </div>

    )
    
}

export default TeacherList;