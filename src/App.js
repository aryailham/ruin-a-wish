import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NewPost from "./containers/NewPost/NewPost";
import AllPost from "./containers/AllPost/AllPost";
import Post from "./containers/Post/Post";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" render={() => <AllPost />} exact />
        <Route path="/new-post" component={NewPost} exact />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Layout>
  );
};

export default App;
