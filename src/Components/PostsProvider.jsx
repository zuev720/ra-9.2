import React from 'react';
import {PostsContext} from './PostsContext';
import {useJsonFetch} from '../Hooks/useJsonFetch';

export function PostsProvider(props) {
    const [loading, data, error] = useJsonFetch(process.env.REACT_APP_PUBLIC_URL, {method: 'GET'});

     return(
        <PostsContext.Provider value={[loading, data, error]}>
            {props.children}
        </PostsContext.Provider>
    )
}
