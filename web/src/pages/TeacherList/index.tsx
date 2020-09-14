import React from 'react';

import './style.css';
import PageHeader from '../../componentes/pageHeader';
import whatsappIcon from '../../assests/images/icons/whatsapp.svg';
import peronaFirst from '../../assests/images/pessoa1.png'
import personaSecond from '../../assests/images/pessoa2.png'
import personaThird from '../../assests/images/pessoa3.png'
import TeacherItem from '../../componentes/teacherItem';
import Input from '../../componentes/input';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Input name='subject' label="Matéria"/>
                   
                    <Input name='week_day' label="Dia da semana"/>
                    
                    <Input type="time" name='time' label="Hora"/>

                  
                </form>
            </PageHeader>
            <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;