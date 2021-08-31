import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {PostsPage} from './Components/MainPage/PostsPage';
import './App.css';
import {PostCreatePage} from './Components/PostCreatePage/PostCreatePage';
import {PostPage} from './Components/PostPage/PostPage';
import {PostsProvider} from './Components/PostsProvider';
import {EditPostPage} from './Components/EditPostPage/EditPostPage';
import {ErrorPage} from './Components/ErrorPage/ErrorPage';

function App() {
    return (
        <PostsProvider>
            <Router>
                <div className={'App'}>
                    <Switch>
                        <Route path={'/posts/edit/:id'} component={EditPostPage} />
                        <Route path={'/posts/new'} component={PostCreatePage} />
                        <Route path={'/posts/:id'} component={PostPage} />
                        <Route path={'/error'} component={ErrorPage} />
                        <Route exact path={'/'} component={PostsPage} />
                    </Switch>
                </div>
            </Router>
        </PostsProvider>
    );
}

export default App;
