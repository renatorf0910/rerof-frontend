import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Home = () => {
    const { data, isLoading } = useQuery('users', () => {
        return axios
            .get("http://localhost:8000/api/user")
            .then((response) => response.data);
    });

    console.log("data:", data)

    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div>
            Home
        </div>
    )
}

export default Home;