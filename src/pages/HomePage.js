import React from 'react'
import { useSelector } from 'react-redux';
import HoaxSubmit from '../components/HoaxSubmit'
import UserList from '../components/UserList'

export default function HomePage() {
    const { isLoggedIn } = useSelector((store) => ({ isLoggedIn: store.isLoggedIn }));
    return (
        <div className="container">
            <div className='row'>
                <div className='col'>
                    {isLoggedIn && <HoaxSubmit />}
                </div>
                <div className='col'>
                    <UserList />
                </div>
            </div>
        </div>
    );
};
