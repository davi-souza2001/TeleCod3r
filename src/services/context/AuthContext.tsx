import { createContext, useEffect, useState } from 'react';
import User from '../../models/User';
import Cookie from 'js-cookie';

interface AuthContextProps {
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    user?: User;
    getIfUserExists?: Function;
    users?: Array<Object>;
    alo?: String
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any){

    const alo = 'alo'

    return (
        <AuthContext.Provider value={{ alo }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;