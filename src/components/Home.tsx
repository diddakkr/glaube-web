import React,{FC} from 'react'
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home: FC = () => {
    return(
        <div className="Home">
            <Layout pageTitle="Home Page">
            <h1>Welcome to Galube Consultancy</h1>
            <p>Hi there!, This page is under development</p>
            {/* <Link to="/">Home</Link> */}
            </Layout>
        </div>
    );

}

export default Home;