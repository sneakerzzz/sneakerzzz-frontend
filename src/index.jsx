import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter } from 'react-router-dom';
import NotificationProvider from './components/notification/NotificationProvider';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
    <>
        <GlobalProvider>
            <BrowserRouter>
                <NotificationProvider>
                    <App />
                </NotificationProvider>
            </BrowserRouter>
        </GlobalProvider>
    </>
);