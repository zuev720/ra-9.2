import React, {useContext, useState} from 'react';
import {PostsContext} from '../PostsContext';
import {useHistory} from 'react-router-dom';
import {TextArea} from '../TextArea/TextArea';
import {Button} from '../Button/Button';
import './EditPostPage.css';

export function EditPostPage(props) {
    const history = useHistory();
    const id = props.match.params.id;
    const [loading, data, error] = useContext(PostsContext);
    const post = data.find((elem) => elem.id === Number(id));
    const [textAreaValue, setTextAreaValue] = useState(post.content);
    const handleTextArea = (e) => setTextAreaValue(e.target.value);

    const handleChangePostClick = async () => {
        const obj = {id: post.id, content: textAreaValue};
        await fetch(process.env.REACT_APP_PUBLIC_URL, {method: 'POST', body: JSON.stringify(obj)}).then((result) => {
            if (result.status === 204) {
                history.replace(`/posts/${id}`);
            } else {
                history.replace(`/error`);
            }
        });
    };

    const handleLeaveEditPageButton = () => {
        history.replace(`/posts/${id}`);
    }

    return (
        <div className={'EditPostPage'}>
            {error && history.replace(`/error`)}
            {loading && <p>...Loading</p>}
            <div className={'HeaderBlock'}>
                <h3 className={'header'}>Редактировать публикацию</h3>
            </div>
            <Button className={'LeaveEditPageButton'} onClick={handleLeaveEditPageButton}>&#10008;</Button>
            <TextArea className={'EditTextArea'} value={textAreaValue} onChange={handleTextArea} focus={true}/>
            <Button className={'PostChangeButton'} onClick={handleChangePostClick}>Сохранить</Button>
        </div>
    )
}
