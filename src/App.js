import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './component/layout';
import classes from './App.module.css';
import Navigation from './component/Navigation/Navigation';
import gitLogo from './component/images/github.png';
import linkedinLogo from './component/images/linkedin.png';
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
            <div className={classes.App_header}>
                <Navigation></Navigation>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div >
                        <a href="https://github.com/Abhi41288" target="_blank">
                            <img src={gitLogo} alt="gitHub" style={{ width: "28px" }} />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/abhishek-kamalkishor-75803258/" target="_blank">
                            <img src={linkedinLogo} alt="In" className={classes.Image} />
                        </a>
                    </div>
                </div>
            </div>

            <Layout >
                <div className={classes.Quote}>
                    <p><strong>You can not understand everything, but you should push yourself to understand the system</strong></p>
                </div>
                <Switch>
                    <Route path="/about" component={() => MyComponent(About)} />
                    <Route path="/" component={() => MyComponent(Home)} />
                </Switch>
            </Layout>
        </div>
    )
}

export default App
