type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
};

import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css'
import { BsSearch } from 'react-icons/bs';

const  Search = ({loadUser}: SearchProps) => {

//buscar o que o usuario digitou
const [userName, setUserName] = useState("");



     //buscar pelo ENTER //keyboardEvent = evento de teclado
const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
     loadUser(userName);
    }
};


    return(
        <div className={classes.search}>
            <h2>Busque o usuário: </h2>
            <p>Conheça seus melhores repositórios</p>

            <div className={classes.search_container}>
             <input type='text' placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)}

             //buscar pelo ENTER
             onKeyDown={handleKeyDown}
             
             
             />
              
            
             <button onClick={() => loadUser(userName)}>
            
                <BsSearch/>
             </button>
            </div>




        </div>
    )
};

export default Search;

//   <button onClick={() => loadUser(userName)}> passando função e capturando o nome.