import { useState, useEffect } from 'react';

import { getSession } from "api/session";

export const useIsLogged = () => {
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        getSession()
            .then(() => {
                setIsLogged(true);
            })
            .catch(() => {
                setIsLogged(false)
            });
    }, []);

    return isLogged;
}
