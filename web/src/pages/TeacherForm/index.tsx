import React from 'react';

import './style.css';
import PageHeader from '../../componentes/pageHeader';
import Input from '../../componentes/input';
import warningIcon from '../../assests/images/icons/warning.svg';
import Textarea from '../../componentes/Textarea';
import Select from '../../componentes/Select';
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição" />
            <main> {/*o campo onde terá todo o formulário*/}
                <fieldset> {/*isso ajuda a formar um campo, melhor do que colocar div e ajuda na acessibilidade*/}
                    <legend>
                        Seus dados
                    </legend>

                    <Input name="name" label="Nome completo" />

                    <Input name="avatar" label="Avatar" />

                    <Input name="whatsapp" label="WhatsApp" />
                   <Textarea name="bio" label="biografia"></Textarea>

                </fieldset>

                <fieldset> {/*isso ajuda a formar um campo, melhor do que colocar div e ajuda na acessibilidade*/}
                    <legend>
                       Sobre a aula
                    </legend>

                    <Select name="subject" label="Matéria"
                    options={
                        [{value:'Artes',label:'Artes'},
                        {value:'Biologia',label:'Biologia'},
                        {value:'Ciências',label:'Ciências'},
                        {value:'Educação Física',label:'Educação Física'},
                        {value:'Física',label:'Física'},
                        {value:'Geografia',label:'Geografia'},
                        {value:'história',label:'história'},
                        {value:'Matemática',label:'Matemática'},
                        {value:'Português',label:'Português'},
                        {value:'Quimica',label:'Quimica'}]
                    } />

                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>
                <fieldset>
                    <legend>horários disponíveis
                    <button type="button">+ novo horário</button>
                    </legend>
                    <div className="schedule-iten">
                        
                    </div>
                   
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/> 
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;