import React from "react";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";
import ArticleList from './components/ArticleList/ArticleList';
import ArticleView from './components/ArticleView/ArticleView';
import AuthorView from './components/AuthorView/AuthorView';


export default ()=>(
 <BrowserRouter>
        {/* <Container>
          <Jumbotron className="text-center">
            <Link to="/">
              <h1>The JSONPlaceholder Times</h1>
            </Link>
            <p>The latest articles on sample placeholder items.</p>
          </Jumbotron> */}
          <Switch>
            <Route path="/posts/:postId" component={ArticleView} />
            <Route path="/author/:authorId" component={AuthorView} />
            <Route path="/" component={ArticleList} />
          </Switch>
        {/* </Container> */}
      </ BrowserRouter>


)
