import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assests/images/icons/back.svg';
import logoImg from '../../assests/images/logo.svg'; 
import'./style.css';
interface PageHeaderProps {
    title: string;
    description?: string;
} //definir tipagens de um objeto

const PageHeader: React.FunctionComponent<PageHeaderProps> =(props) => { //ele fala que tem um componente page header e as props que ele pode receber
    return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="voltar" />
            </Link>
            <img src={logoImg} alt="logo" />
        </div>
        <div className="header-content">
            {/* o title passa o que deverá ser colocado nessa parte */}
            <strong>{props.title}</strong> 

            {props.description && <p>{props.description}</p> }
            {/*com o and (&&) o if irá fazer a ação pós ele apenas quando o primeiro estiver dentro dos parametros*/}
            {props.children} {/*o children é uma propriedade automatica
            na qual vê qual conteúdo foi passado pro componente*/}

        </div>
    </header>);
}

export default PageHeader;