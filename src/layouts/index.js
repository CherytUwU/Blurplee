import React from 'react';
// Components
import Header from '../utils/header';
import Footer from '../utils/footer';

const LayoutPrincipal = ({children}) => {
    return(
        <div>
            <Header />
            <div  className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPrincipal;