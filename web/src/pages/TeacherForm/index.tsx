import React, { FormEvent, useState } from 'react';

import './style.css';
import PageHeader from '../../componentes/pageHeader';
import Input from '../../componentes/input';
import warningIcon from '../../assests/images/icons/warning.svg';
import Textarea from '../../componentes/Textarea';
import Select from '../../componentes/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
function TeacherForm() {

    const history = useHistory()

    //anotando o imput em cada estado
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])
    function addNewScheduleItem() {
        setScheduleItems(
            [
                ...scheduleItems,
                {
                    week_day: 0, from: '', to: ''
                }
            ]
        )
    }
    /*essa função vai ser chamada com alguns valores, caso o if funcione ele entra e retorna um objeto que copia todo o antigo array
    e no final da cópia e ele pega o local em que mudou o valor e sobescreve o valor que está ali, caso não entre no if, ele retorna a
    array antiga sem alteração */
    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem
        }
        )
        setScheduleItems(updateScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems

        }).then(()=>{
            alert("Cadastro Realizado com sucesso!")
            history.push('/')
        }).catch(()=>{
            alert('Erro no cadastro')
        })
        console.log({
        })
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição" />
            <main> {/*o campo onde terá todo o formulário*/}
                <form onSubmit={(handleCreateClass)}>
                    <fieldset> {/*isso ajuda a formar um campo, melhor do que colocar div e ajuda na acessibilidade*/}
                        <legend>
                            Seus dados
                    </legend>
                                                                        {/* anotando o imput em cada estado */}
                        <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value) }} />

                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />

                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                        <Textarea name="bio" label="biografia" value={bio} onChange={(e) => { setBio(e.target.value) }}></Textarea>

                    </fieldset>

                    <fieldset> {/*isso ajuda a formar um campo, melhor do que colocar div e ajuda na acessibilidade*/}
                        <legend>
                            Sobre a aula
                    </legend>

                        <Select name="subject" label="Matéria" value={subject} onChange={(e) => { setSubject(e.target.value) }}
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

                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => { setCost(e.target.value) }} />

                    </fieldset>
                    <fieldset>
                        <legend>horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ novo horário</button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da semana" value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input name="to" label="até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            )
                        })}


                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type='submit'>
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;