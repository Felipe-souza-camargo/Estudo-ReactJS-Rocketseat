/* o React Router dom não faz verificação de igualdade, faz a verificação de 
conteudo, se o caminho tiver o que está no path ele acaba mostrando a landing em todas as outras telas*/

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){ 
    return( // cada pagina da app é uma route,cada propriedade é exatamente a mesma coisa do que no html só que no componente
         <BrowserRouter>
        <Route path='/' exact component={Landing}/> 
        
        <Route path='/study' component={TeacherList}/> 
        
        <Route path='/give-classes' component={TeacherForm}/> 
        </BrowserRouter>
    )
}
export default Routes;