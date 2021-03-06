import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

// Pages
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Movie from './pages/movie';
import Popular from './pages/popular';
import Search from './pages/search';
import Error404 from './pages/error404';

// Components
import Navbar from './components/Navbar';

export default function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        
        <Header>
          <Navbar />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            
            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>

            <Route path="/popular" exact={true}>
              <Popular />
            </Route>

            <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>

      </Router>
    </Layout>
  );
}
