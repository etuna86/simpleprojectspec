import React from 'react'
import Header from '../layouts/header'
import { useTranslation } from 'react-i18next'

function pageTwo(){

    const {t} =useTranslation();

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    <div className="bg-half-grey"></div>
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>{t('pageTwoTitle')}</h1>  
                    <p>{t('pageTwoContent')}</p>
                </div>

             </div>
        </div>
        
    </div>
    </>
);

}


export default pageTwo;