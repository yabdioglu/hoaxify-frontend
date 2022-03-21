import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHoaxes } from '../api/apiCalls';
import HoaxView from './HoaxView';

export default function HoaxFeed() {
    const [hoaxPage, setHoaxPage] = useState({ content: [], last: true });
    const { t } = useTranslation();

    useEffect(() => {
        const loadHoaxes = async () => {
            try {
                const response = await getHoaxes();
                setHoaxPage(response.data);
            } catch (error) { }
        }
        loadHoaxes();
    }, []);

    const { content, last } = hoaxPage;

    if (content.length === 0) {
        return <div className='alert alert-secondary text-center'>{t('There are no hoaxes')}</div>
    }


    return (
        <div>
            {content.map(hoax => {
                return <HoaxView key={hoax.id} hoax={hoax} />
            })}
            {!last && <div className='alert alert-secondary text-center'>{t('Load old hoaxes')}</div>}
        </div>
    );
};
