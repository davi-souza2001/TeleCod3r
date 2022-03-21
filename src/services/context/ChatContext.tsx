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
    sendMensage?: any
    messages?: Object[];
}

const ChatContext = createContext<ChatContextProps>({});

export function ChatProvider(props: any) {
    const { user } = useAuth();
    const [messageSend, setMessageSend] = useState('');
    const [messages, setMessages] = useState<Object[]>([]);

    function sendMensage(e: any) {
        e.preventDefault();
        if (user?.email != '') {
            const db = database;
            const postList = ref(db, 'chat/Geral')
            const newPostRef = push(postList)
            set(newPostRef, {
                mensage: e,
                userSend: user?.email,
                userNameSend: user?.name
            });
        } else {
            alert('Faça login ou escreva algo para enviar!');
        }
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
            setMessages(chatList);
            console.log(messages)
        });
    }

    useEffect(() => {
        checkChatExists();
    }, []);

    return (
        <ChatContext.Provider value={{ messages, sendMensage }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContext;