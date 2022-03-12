import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApiProgress = (apiMethod, apiPath) => {
    const [pendingApiCall, setPendingApiCall] = useState(false);

    useEffect(() => {
        let requestInterceptor, responseInterceptor;

        const updateApiCallFor = (method, url, inProgress) => {
            if (url.startsWith(apiPath) && method === apiMethod) {
                setPendingApiCall(inProgress);
            }
        };

        const registerInterceptors = () => {
            requestInterceptor = axios.interceptors.request.use((request) => {
                const { url, method } = request;
                updateApiCallFor(method, url, true);
                return request;
            });

            //Interceptorlar geri idsini döner.
            responseInterceptor = axios.interceptors.response.use((response) => {
                const { url, method } = response.config;
                updateApiCallFor(method, url, false);
                return response;
            }, (error) => {
                const { url, method } = error.config;
                updateApiCallFor(method, url, false);
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
    }, [apiPath, apiMethod]);

    return pendingApiCall;
}