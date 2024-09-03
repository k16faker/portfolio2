/// <reference types="react-scripts" />

declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_SERVICE_KEY: string;
        REACT_APP_TEMPLATE_KEY: string;
        REACT_APP_PUBLIC_KEY: string;
    }
}
