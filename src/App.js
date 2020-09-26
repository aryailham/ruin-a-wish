import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NewPost from "./containers/NewPost/NewPost";
import AllPost from "./containers/AllPost/AllPost";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" render={() => <AllPost />} exact />
        <Route path="/new-post" component={NewPost} exact />
      </Switch>
    </Layout>
  );
};

export default App;
