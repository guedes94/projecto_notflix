import { createContext, useState  } from 'react';

//Valor inicial do contexto
const initialValue = null

//Criamos o contexto de Utilizador
export const UserContext =  createContext(initialValue)


//Criamos o provider para O CONTEXTO de utilizador
const UserProvider = (props) => {

    const [user, setUser] = useState('');

    //Função que guarda o nome no nosso contexto
    const loggedUser = (name) => {
        setUser(name)
    }

    //Função que remove o nome no nosso contexto
    const logout = () => {
        setUser('')
    }

    //Retornamos o Provider e no value passamos as informações que queremos disponibilizar
    return <UserContext.Provider value={{
            name: user,
            loggedUser,
            logout
        }}>
        {props.children}
    </UserContext.Provider>
}

//Exportamos ao provider
export default UserProvider