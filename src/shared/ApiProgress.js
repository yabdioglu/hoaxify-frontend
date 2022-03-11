import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApiProgress = apiPath => {
    const [pendingApiCall, setPendingApiCall] = useState(false);

    useEffect(() => {
        let requestInterceptor, responseInterceptor;

        const updateApiCallFor = (url, inProgress) => {
            if (url.startsWith(apiPath)) {
                setPendingApiCall(inProgress);
            }
        };

        const registerInterceptors = () => {
            requestInterceptor = axios.interceptors.request.use((request) => {
                updateApiCallFor(request.url, true);
                return request;
            });

            //Interceptorlar geri idsini döner.
            responseInterceptor = axios.interceptors.response.use((response) => {
                updateApiCallFor(response.config.url, false);
                return response;
            }, (error) => {
                updateApiCallFor(error.config.url, false);
                throw error;
            });
        };

        const unregisterInterceptors = () => {
            // Parametre olarak interceptorın idsini ister.
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        }

        registerInterceptors();

        return function unmount() {
            unregisterInterceptors();
        }
    }, []);

    return pendingApiCall;
}