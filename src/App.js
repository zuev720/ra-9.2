import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import {MainPage} from './Components/MainPage/MainPage';
import './App.css';
import {PostCreatePage} from './Components/PostCreatePage/PostCreatePage';
import {PostPage} from './Components/PostPage/PostPage';
import {EditPostPage} from './Components/EditPostPage/EditPostPage';
import {ErrorPage} from './Components/ErrorPage/ErrorPage';

function App() {
    return (
        <div className={'App'}>
            <Router baseName={'https://zuev720.github.io/ra-9.2'}>
                <Switch>
                    <Route path={'/posts/edit/:id'} component={EditPostPage}/>
                    <Route path={'/posts/new'} component={PostCreatePage}/>
                    <Route path={'/posts/:id'} component={(props) => <PostPage {...props}/>}/>
                    <Route path={'/error'} component={ErrorPage}/>
                    <Route exact={true} path={'/posts'} component={MainPage}/>
                    <Redirect to={'/posts'}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
