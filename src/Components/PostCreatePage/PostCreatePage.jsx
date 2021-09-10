import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '../Button/Button';
import './PostCreatePage.css';
import {TextArea} from '../TextArea/TextArea';

export function PostCreatePage() {
    const history = useHistory();
    const [state, setState] = useState('');
    const handleTextArea = (e) => setState(e.target.value);

    const handleCreatePostButton = async () => {
        if (state.trim() === '') return null;
        const obj = {id: 0, content: state.trim()};
        await fetch(process.env.REACT_APP_PUBLIC_URL, {method: 'POST', body: JSON.stringify(obj)}).then((result) => {
            if (result.status === 204) {
                history.push(`/`);
            } else {
                history.push(`/error`);
            }
        });
    }

    const handleLeaveCreatePageButton = () => history.push(`/`);

    return (
        <div className={'PostCreatePage'}>
            <TextArea className={'CreatePostTextArea'} value={state} onChange={handleTextArea} />
            <Button className={'LeaveCreatePageButton'} onClick={handleLeaveCreatePageButton}>&#10008;</Button>
            <Button className={'CreatePostButton'} onClick={handleCreatePostButton}>Создать пост</Button>
        </div>
    )
}
