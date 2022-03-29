import React, { useState } from 'react'
import ProfileImageWithDefault from '../components/ProfileImageWithDefault';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { deleteHoax } from '../api/apiCalls';
import Modal from './Modal';
import { useApiProgress } from '../shared/ApiProgress';

export default function HoaxView(props) {
    const loggedInUser = useSelector(store => store.username);
    const { hoax, onDeleteHoax } = props;
    const { user, content, timestamp, fileAttachment, id } = hoax;
    const { username, displayName, image } = user;
    const [modelVisible, setModelVisible] = useState(false);

    const pendingApiCall = useApiProgress('delete', `/api/1.0/hoaxes/${id}`, true);

    const { t, i18n } = useTranslation();

    const onClickDelete = async () => {
        await deleteHoax(id);
        onDeleteHoax(id);
    };

    const onClickCancel = () => {
        setModelVisible(false);
    }

    const formatted = format(timestamp, i18n.language);

    const ownedByLoggedInUser = loggedInUser === username;

    return (
        <>
            <div className='card p-1'>
                <div className='d-flex'>
                    <ProfileImageWithDefault image={image} width="32" height="32" className="rounded-circle m-1" />
                    <div className='flex-fill m-auto ps-2'>
                        <Link to={`/user/${username}`} className="text-dark" style={{ textDecoration: 'none' }}>
                            <h6 className='d-inline'>
                                {displayName}@{username}
                            </h6>
                            <span> - </span>
                            <span>{formatted}</span>
                        </Link>
                    </div>
                    {ownedByLoggedInUser && <button className='btn btn-delete-link btn-sm' onClick={() => setModelVisible(true)} >
                        <i className='material-icons'>delete_outline</i>
                    </button>}
                </div>
                <div className='ps-5'>
                    {content}
                </div>
                {fileAttachment && (
                    <div className='ps-5'>
                        {fileAttachment.fileType.startsWith('image') && (
                            <img className='img-fluid' src={'images/attachments/' + fileAttachment.name} alt={content} />)}
                        {!fileAttachment.fileType.startsWith('image') && (
                            <strong>Hoax has unknown attachment</strong>
                        )}
                    </div>
                )}
            </div>
            <Modal visible={modelVisible}
                title={t('Delete Hoax')}
                onClickCancel={onClickCancel}
                onClickOk={onClickDelete}
                pendingApiCall={pendingApiCall}
                message={
                    <div>
                        <div>
                            <strong>{t('Are you sure to delete hoax ?')}</strong>
                        </div>
                        <span>{content}</span>
                    </div>
                }
                okButton={t('Delete Hoax')}
            />
        </>
    );
};
