"use strict"

var React = require('react');

var Router = require('react-router');
var DefaultRouter = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}
        <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="about" handler={require('./components/authors/aboutPage')} />
    </Route>
);

module.exports = routes;