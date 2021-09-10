import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {TextArea} from '../TextArea/TextArea';
import {Button} from '../Button/Button';
import './EditPostPage.css';

export function EditPostPage(props) {
    const history = useHistory();
    const post = props.location.propsSearch;
    if (!post) history.push(`/error`);
    const [textAreaValue, setTextAreaValue] = useState(post.content);
    const handleTextArea = (e) => setTextAreaValue(e.target.value);

    const handleChangePostClick = async () => {
        const obj = {id: post.id, content: textAreaValue};
        await fetch(process.env.REACT_APP_PUBLIC_URL, {method: 'POST', body: JSON.stringify(obj)}).then((result) => {
            if (result.status === 204) {
                history.replace(`/`);
            } else {
                history.replace(`/error`);
            }
        });
    };

    return (
        <div className={'EditPostPage'}>
            <div className={'HeaderBlock'}>
                <h3 className={'header'}>Редактировать публикацию</h3>
            </div>
            <Link to={{
                pathname: `/posts/${post.id}`,
                propsSearch: post
            }} className={'LeaveEditPageButton'}>&#10008;</Link>
            <TextArea className={'EditTextArea'} value={textAreaValue} onChange={handleTextArea} focus={true}/>
            <Button className={'PostChangeButton'} onClick={handleChangePostClick}>Сохранить</Button>
        </div>
    )
}
