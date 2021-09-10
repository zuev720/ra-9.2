import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import moment from 'moment';
import {useJsonFetch} from '../../Hooks/useJsonFetch';

export function MainPage() {
    const history = useHistory();

    const CreatePostBlock = () =>
        <div className={'CreatePostBlock'}>
            <Link to={'/posts/new'} className={'createPostButton'}>Создать пост</Link>
        </div>

    const Post = (props) => {
        const date = moment(props.create).format('YYYYMMDD');
        const dateFromNow = moment(date, 'YYYYMMDD').fromNow();
        return (
            <li className={'Post'}>
                {props.error && history.replace('/error')}
                <div className={'UserInfoBlock'}>
                    <img className={'UserImage'} src={props.img} alt={'user'}/>
                    <div className={'PostInfoBlock'}>
                        <p className={'UserName'}>{props.name}</p>
                        <p className={'created'}>{dateFromNow}</p>
                    </div>
                </div>
                <Link to={{
                    pathname: `/posts/${props.id}`,
                    propsSearch: props}
                } className={'TextPostBlock'}>
                    <p className={'TextPost'}>{props.content}</p>
                </Link>
            </li>
        )
    }

    const Posts = (props) =>
        <ul>
            {props.loading && <p>...Loading</p>}
            {(props.data) && props.data.map((elem) => <Post
                key={elem.id}
                id={elem.id}
                img={elem.img}
                name={elem.name}
                content={elem.content}
                create={elem.create}
            />)}
        </ul>

    const PostsPage = () => {
        const [loading, data, error] = useJsonFetch(process.env.REACT_APP_PUBLIC_URL, {method: 'GET'});

        return (
            <div className={'PostsPage'}>
                <CreatePostBlock/>
                <Posts loading={loading} data={data} error={error}/>
            </div>
        )
    }

    return (
        <PostsPage/>
    )
}
