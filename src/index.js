import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';

import { App } from 'containers/App';

const root = ReactDom.createRoot( document.getElementById('root') );
root.render( 
    <StrictMode>
        <App />
    </StrictMode>
)