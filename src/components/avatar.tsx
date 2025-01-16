import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

export function Avatar(props: { email: string }) {
    const avatar = useMemo(() => {
        return createAvatar(lorelei, {
            size: 128,
            seed: props.email

        }).toDataUri();
    }, []);

    return <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />;
}