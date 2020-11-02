import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from './component/layout';
import Navigation from './component/Navigation/Navigation';
const Home = React.lazy(() => import('./component/Home/Home'));
//import Home from './component/Home/Home';
const About = React.lazy(() => import('./component/About/About'));
//import About from './component/About/About';


const App = () => {
    function MyComponent(Component) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        );
    }

    return (
        <div>
            <Layout >
                <Navigation></Navigation>
                <Switch>
                    <Route path="/about" component={() => MyComponent(About)} />
                    <Route path="/" component={() => MyComponent(Home)} />
                </Switch>
            </Layout>
        </div>
    )
}

export default App
