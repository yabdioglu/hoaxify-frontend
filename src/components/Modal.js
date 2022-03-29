import React from 'react'
import { useTranslation } from 'react-i18next';
import ButtonWithProgress from './ButtonWithProgress';

export default function Modal({ visible, onClickCancel, message, onClickOk, pendingApiCall }) {
    const { t } = useTranslation();

    let className = "modal fade";
    if (visible) {
        className += " show d-block";
    }

    return (
        <div className={className} style={{ backgroundColor: '#000000b0' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{t('Delete Hoax')}</h5>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" disabled={pendingApiCall} className="btn btn-secondary" onClick={onClickCancel}>{t('Cancel')}</button>
                        <ButtonWithProgress
                            className="btn btn-danger"
                            onClick={onClickOk}
                            pendingApiCall={pendingApiCall}
                            disabled={pendingApiCall}
                            text={t('Delete Hoax')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
