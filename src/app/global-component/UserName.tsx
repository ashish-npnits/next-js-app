'use client';
import { useAppSelector } from '@/state/store';
import React from 'react';

const UserName = () => {
    const username = useAppSelector((state)=>state.authReducer.value.username);
    
    return (
        username && <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >{username}</a
            >
            </li>
    )
    
}

export default UserName
