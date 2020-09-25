import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NewPost from "./containers/NewPost/NewPost";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" render={() => <h1>All Post</h1>} exact />
        <Route path="/new-post" component={NewPost} exact />
      </Switch>
    </Layout>
  );
};

export default App;
