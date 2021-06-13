import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

function pageFour(){

    const {t} =useTranslation();

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>{t('pageFourTitle')}</h1>  
                    <p>{t('pageFourContent')}</p>
                </div>

             </div>
        </div>
        
    </div>
    <Footer />
    </>
);

}


export default pageFour;