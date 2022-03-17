import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                Username: 'Username',
                'Display Name': 'Display Name',
                Password: 'Password',
                'Password Repeat': 'Password Repeat',
                Login : 'Login',
                Logout: 'Logout',
                Users: 'Users',
                Previous: '< previous',
                Next: 'next >',
                'Load Failure': 'Load Failure',
                'User not found': 'User not found',
                Edit: 'Edit',
                'Change Display Name': 'Change Display Name',
                Save: 'Save',
                Cancel: 'Cancel',
                'My Profile': 'My Profile'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                Username: 'Kullanıcı adı',
                'Display Name': 'Tercih Edilen İsim',
                Password: 'Şifre',
                'Password Repeat': 'Şifreyi Tekrarla',
                Login : 'Sisteme Gir',
                Logout: 'Çıkış Yap',
                Users: 'Kullanıcılar',
                Previous: '< önceki',
                Next: 'sonraki >',
                'Load Failure': 'Liste alınamadı',
                'User not found': 'Kullanıcı bulunamadı',
                Edit: 'Düzenle',
                'Change Display Name': 'Görünür İsminizi Değiştirin',
                Save: 'Kaydet',
                Cancel: 'İptal Et',
                'My Profile': 'Hesabım'
            }
        }
    },
    fallbackLng: 'en', //herhangi bir dil match etmediğinde
    ns: ['translations'], // kelimeleri hangi havuzdan alsın
    defaultNS : 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

export default i18n;