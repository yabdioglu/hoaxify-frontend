import React from 'react'
import { changeLanguage } from '../api/apiCalls';
import { useTranslation } from 'react-i18next';

function LanguageSelector(props) {
    const { i18n } = useTranslation();

    const onChangeLanguage = language => {
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    return (
        <div className='container'>
            <img src="https://flagcdn.com/24x18/tr.png" alt="Turkish Flag" onClick={() => onChangeLanguage('tr')} style={{ cursor: 'pointer' }} />
            <img src="https://flagcdn.com/24x18/us.png" alt="USA Flag" onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }} />
        </div>
    )
}

export default LanguageSelector;
