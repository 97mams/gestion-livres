"use client"

import { useEffect, useRef, useMemo, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { LogOut } from './logout';

export function Avatar(props: { email: string }) {
    const [drop, setDrop] = useState(false)
    const ref = useRef<HTMLImageElement>(null);
    const avatar = useMemo(() => {
        return createAvatar(lorelei, {
            size: 128,
            seed: props.email

        }).toDataUri();
    }, []);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {

            if (!ref.current?.contains(event.target as Node)) {
                setDrop(false)
            }

        }
        window.addEventListener('click', handleOutsideClick)

        return () => window.removeEventListener('click', handleOutsideClick)
    }, [ref])

    const handlerDrop = () => {
        setDrop(!drop)
    }

    return (
        <div>
            <img
                src={avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={handlerDrop}
                ref={ref}
            />
            {drop ?
                <div className="h-47 bg-card-foreground border border-card w-72 rounded-xl absolute right-8 top-16">
                    <div className="flex flex-col text-card p-2 gap-2">
                        <a className='p-2 hover:bg-card rounded-xl hover:text-foreground' href="/emprunt">dasbord</a>
                        <a className='p-2 hover:bg-card rounded-xl hover:text-foreground' href="#">Profile</a>
                        <LogOut classname='p-2 hover:bg-card rounded-xl hover:text-foreground' />
                    </div>

                </div> : ''}
        </div>
    );
}