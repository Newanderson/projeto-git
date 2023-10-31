import Search from "../components/Search";
import { useState} from 'react'; 
import { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";


//PAGINA PRINCIPAL 

const Home = () => {


    //dados do ususario
    const [ user, setUser] = useState<UserProps | null>(null);

    //error
    const [error, setError] = useState(false);




    //buscar
    const loadUser = async(userName:string) => {

        setError(false);
        setUser(null);

     // buscando dados da Api
       const res = await fetch(`https://api.github.com/users/${userName}`);

       const data = await res.json();

       //erro 404
       if( res.status === 404){
        setError(true);
        return;

       }

       //filtrando dados 
       const {avatar_url, login, location,followers, following  } = data;

       const userData: UserProps={
        avatar_url,
        login,
        location,
        followers,
        following
        
        
        
       };
       setUser(userData);

       
    };

    return(
        <div>
            <Search loadUser={loadUser}/>
            {user && <User {...user}/>}
            { error && <Error/> }
           
        </div>
    );
};

export default Home;