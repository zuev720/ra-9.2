import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {PostsContext} from '../PostsContext';
import moment from 'moment';

export function PostsPage() {
    const history = useHistory();
    const [loading, data, error] = useContext(PostsContext);
    const CreatePostBlock = () =>
        <div className={'CreatePostBlock'}>
            <Link to={'/posts/new'} className={'createPostButton'}>Создать пост</Link>
        </div>

    const Post = (props) => {
        const date = moment(props.create).format('YYYYMMDD');
        const dateFromNow = moment(date, 'YYYYMMDD').fromNow();
        return (
            <li className={'Post'}>
                {error && history.replace('/error')}
                <div className={'UserInfoBlock'}>
                    <img className={'UserImage'} src={props.img} alt={'user'}/>
                    <div className={'PostInfoBlock'}>
                        <p className={'UserName'}>{props.name}</p>
                        <p className={'created'}>{dateFromNow}</p>
                    </div>
                </div>
                <Link to={`/posts/${props.id}`} className={'TextPostBlock'}>
                    <p className={'TextPost'}>{props.content}</p>
                </Link>
            </li>
        )
    }

    const Posts = () =>
        <ul>
            {loading && <p>...Loading</p>}
            {(data) && data.map((elem) => <Post
                key={elem.id}
                id={elem.id}
                img={elem.img}
                name={elem.name}
                content={elem.content}
                create={elem.create}
            />)}
        </ul>


    return (
        <div className={'PostsPage'}>
            <CreatePostBlock/>
            <Posts/>
        </div>
    )
}
