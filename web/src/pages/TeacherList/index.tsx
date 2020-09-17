import React from 'react';

import './style.css';
import PageHeader from '../../componentes/pageHeader';
import whatsappIcon from '../../assests/images/icons/whatsapp.svg';
import peronaFirst from '../../assests/images/pessoa1.png'
import personaSecond from '../../assests/images/pessoa2.png'
import personaThird from '../../assests/images/pessoa3.png'
import TeacherItem from '../../componentes/teacherItem';
import Input from '../../componentes/input';
import Select from '../../componentes/Select';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select name="subject" label="Matéria"
                        options={
                            [{ value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'história', label: 'história' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Quimica', label: 'Quimica' }]
                        } />

                    <Select name="week_day" label="Dia da semana"
                        options={
                            [
                                { value: '0', label: 'Domingo' }, 
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feira' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sábado' },

                            ]
                        } />

                    <Input type="time" name='time' label="Hora" />


                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;