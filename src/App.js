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
        <Router basename={'/'}>
            <div className={'App'}>
                <Switch>
                    <Route path={'/posts/edit/:id'} component={EditPostPage}/>
                    <Route path={'/posts/new'} component={PostCreatePage}/>
                    <Route path={'/posts/:id'} component={(props) => <PostPage {...props}/>}/>
                    <Route path={'/error'} component={ErrorPage}/>
                    <Route exact component={MainPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
