import React from 'react'
import ProfileImageWithDefault from '../components/ProfileImageWithDefault';
import { Link } from 'react-router-dom';

export default function HoaxView(props) {
    const { hoax } = props;
    const { user, content } = hoax;
    const { username, displayName, image } = user;
    return (
        <div className='card p-1'>
            <div className='d-flex'>
                <ProfileImageWithDefault image={image} width="32" height="32" className="rounded-circle m-1" />
                <div className='flex-fill m-auto ps-2'>
                    <Link to={`/user/${username}`} className="text-dark" style={{ textDecoration: 'none' }}>
                        <h6>
                            {displayName}@{username}
                        </h6>
                    </Link>
                </div>
            </div>
            <div className='ps-5'>
                {content}
            </div>
        </div>
    );
};
