import React from 'react'
import whatsappIcon from '../../assests/images/icons/whatsapp.svg';
import peronaFirst from '../../assests/images/pessoa1.png'
import'./style.css';
function TeacherItem(){
return(
    <article className="teacher-item">
    <header>
        <img src={peronaFirst} alt="Diego Fernandes" />
        <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>

        </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

    <footer>
        <p>Preço por hora
            <strong>R$80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
    </button>
    </footer>
</article>
)
}
export default TeacherItem;
