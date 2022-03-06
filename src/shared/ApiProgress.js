import axios from 'axios';
import React, { Component } from 'react';

function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withApiProgress(WrappedComponent, apiPath) {
    return class extends Component {
        static displayName = `ApiProgress(${getDisplayName(WrappedComponent)})`;
        
        state = {
            pendingApiCall: false
        }

        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use((request) => {
                this.updateApiCallFor(request.url, true);
                return request;
            });

            //Interceptorlar geri idsini döner.
            this.responseInterceptor =  axios.interceptors.response.use((response) => {
                this.updateApiCallFor(response.config.url, false);
                return response;
            }, (error) => {
                this.updateApiCallFor(error.config.url, false);
                throw error;
            });
        }

        componentWillUnmount() {
            // Parametre olarak interceptorın idsini ister.
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
        updateApiCallFor = (url, inProgress) => {
            if (url === apiPath) {
                this.setState({ pendingApiCall: inProgress });
            }
        }

        render() {
            console.log('Api Progress', this.props, this.state)
            const pendingApiCall = this.state.pendingApiCall || this.props.pendingApiCall;
            return <WrappedComponent {...this.props} pendingApiCall={pendingApiCall}/>
        }
    }
}
