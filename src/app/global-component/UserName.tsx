'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UserName = () => {
    const [username, setUserName] = useState("");
    const router = useRouter();
    const callMeAPI = async () =>{
        try {
            const response = await axios.get('/api/users/me');
            console.log(response.data);
            setUserName(response.data.user.username);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        callMeAPI();
    },[username, router]);

    return (
        username && <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >{username}</a
            >
            </li>
    )
    
}

export default UserName
