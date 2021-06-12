import React from 'react'
import Header from '../layouts/header'
import { useTranslation } from 'react-i18next'

function pageThree(){

    const {t} =useTranslation();

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    <div className="bg-half-grey"></div>
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>{t('pageThreeTitle')}</h1>  
                    <p>{t('pageThreeContent')}</p>
                </div>

             </div>
        </div>
        
    </div>
    </>
);

}


export default pageThree;