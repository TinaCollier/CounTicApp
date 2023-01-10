import { useState } from 'react';

import UserContext from "./UserContext";

export default function AppProvider(props) {
    const [ id, setId ] = useState( 0 );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ eventHistory, setEventHistory ] = useState( [] );
    const [ loggedIn, setLoggedIn ] = useState( false );

    const value = { id, setId, name, setName, email, setEmail, password, setPassword, eventHistory, setEventHistory, loggedIn, setLoggedIn }
    return (
      <UserContext.Provider value={ value }>
        { props.children }
      </UserContext.Provider>
    )
  };