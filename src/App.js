import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {MainPage} from './Components/MainPage/MainPage';
import './App.css';
import {PostCreatePage} from './Components/PostCreatePage/PostCreatePage';
import {PostPage} from './Components/PostPage/PostPage';
import {EditPostPage} from './Components/EditPostPage/EditPostPage';
import {ErrorPage} from './Components/ErrorPage/ErrorPage';

function App() {
    return (
        <Router basename={'https://zuev720.github.io/ra-9.2'}>
            <div className={'App'}>
                <Switch>
                    <Route path={'/ra-9.2/posts/edit/:id'} component={EditPostPage}/>
                    <Route path={'/ra-9.2/posts/new'} component={PostCreatePage}/>
                    <Route path={'/ra-9.2/posts/:id'} component={(props) => <PostPage {...props}/>}/>
                    <Route path={'/ra-9.2/error'} component={ErrorPage}/>
                    <Route exact path={'/ra-9.2'} component={MainPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
