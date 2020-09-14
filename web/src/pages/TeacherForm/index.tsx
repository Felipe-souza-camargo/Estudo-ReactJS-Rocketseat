import React from 'react';

import './style.css';
import PageHeader from '../../componentes/pageHeader';
import Input from '../../componentes/input';
import warningIcon from '../../assests/images/icons/warning.svg';
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

                </fieldset>

                <fieldset> {/*isso ajuda a formar um campo, melhor do que colocar div e ajuda na acessibilidade*/}
                    <legend>
                       Sobre a aula
                    </legend>

                    <Input name="subject" label="Matéria" />

                    <Input name="cost" label="Custo da sua hora por aula" />

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