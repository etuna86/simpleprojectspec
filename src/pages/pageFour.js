import React from 'react'
import Header from '../layouts/header'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function pageFour(){

    const {t} =useTranslation();

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    <div className="bg-half-grey"></div>
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>{t('pageFourTitle')}</h1>  
                    <p>{t('pageFourContent')}</p>
                </div>

             </div>
        </div>
        
    </div>
    </>
);

}


export default pageFour;