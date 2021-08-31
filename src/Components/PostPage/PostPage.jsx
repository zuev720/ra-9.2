import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './PostPage.css';
import {PostsContext} from '../PostsContext';
import moment from 'moment';

export function PostPage(props) {
    const history = useHistory();
    const id = props.match.params.id;
    const [loading, data, error] = useContext(PostsContext);
    const post = data.find((elem) => elem.id === Number(id));
    const handlePostDeleteButton = async () => {
        await fetch(process.env.REACT_APP_PUBLIC_URL+'/'+id, {method: 'DELETE'}).then((result) => {
            if (result.status === 204) {
                history.push(`/`);
            } else {
                history.push(`/error`);
            }
        });
    }

    const date = moment(post.create).format('YYYYMMDD');
    const dateFromNow = moment(date, 'YYYYMMDD').fromNow();

    return(
        <div className={'PostPage'}>
            {error && history.replace(`/error`)}
            {loading && <p>...Loading</p>}
            <div className={'UserInfoBlock'}>
                <img className={'UserImage'} src={post.img} alt={'user'}/>
                <div className={'PostInfoBlock'}>
                    <p className={'UserName'}>{post.name}</p>
                    <p className={'created'}>{dateFromNow}</p>
                </div>
            </div>
            <div className={'TextPostBlock'}>
                <p className={'TextPost'}>{post.content}</p>
            </div>
            <div className={'PostButtonsBlock'}>
                <Link to={`/posts/edit/${id}`} className={'PostChange'}>Изменить</Link>
                <button type={'button'} className={'PostDelete'} onClick={handlePostDeleteButton}>Удалить</button>
            </div>
        </div>
    )
}
