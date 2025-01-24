"use client"

import { useMemo, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { Drop } from './dropProfil';

export function Avatar(props: { email: string }) {
    const [drop, setDrop] = useState(false)
    const avatar = useMemo(() => {
        return createAvatar(lorelei, {
            size: 128,
            seed: props.email

        }).toDataUri();
    }, []);

    const handlerDrop = () => {
        setDrop(!drop)
    }

    return (
        <div>
            <img
                src={avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
                onClick={handlerDrop}
            />
            {drop ? <Drop /> : ''}
        </div>
    );
}