import { createContext, Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from 'react';

import {
    auth,
    database,
    ref,
    get,
    set,
    child,
    onValue,
    push
} from '../../firebase/config';

import useAuth from '../hooks/useAuth';

interface ChatContextProps {
    writeMensage?: any;
    menssages?: any
}

const ChatContext = createContext<ChatContextProps>({});

export function ChatProvider(props: any) {
    const { user } = useAuth();
    const [messageSend, setMessageSend] = useState('');
    const [menssages, setMenssages] = useState<Object[]>([]);

    function writeMensage(msg: string) {
        const db = database;
        set(ref(db, 'chat/Geral'), {
            mensage: msg,
            userSend: 'asdasxcv',
        });
    }

    async function checkChatExists() {
        const dbRef = database;
        const starCountRef = ref(dbRef, 'chat/Geral');
        onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val();
            // const chatList = [];
            // for (let id in data) {
            //     chatList.push({ id, ...data[id] });
            // }
            setMenssages(data);
        });
    }

    useEffect(() => {
        checkChatExists();
    }, []);

    return (
        <ChatContext.Provider value={{ writeMensage, menssages }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContext;