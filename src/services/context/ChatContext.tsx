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
    mensagesUsers?: any
}

const ChatContext = createContext<ChatContextProps>({});

export function ChatProvider(props: any) {
    const { user } = useAuth();
    const [mensagesUsers, setMensagesUsers] = useState<Object[]>([]);

    function writeMensage(msg: String) {
        const db = database;
        const postList = ref(db, `chat/Geral`)
        const newPostRef = push(postList)
        set(newPostRef, {
            mensage: msg,
            userSend: user?.email,
            userReceived: 'Geral',
            userNameSend: user?.name,
            id: Math.random()
        });
    }

    async function checkChatExists() {
        const dbRef = database;
        const starCountRef = ref(dbRef, 'chat/Geral');
        onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val();
            const chatList = [];
            for (let id in data) {
                chatList.push({ id, ...data[id] });
            }
            setMensagesUsers(chatList);
        });
    }

    useEffect(() => {
        checkChatExists();
    }, []);

    return (
        <ChatContext.Provider value={{ writeMensage, mensagesUsers }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContext;