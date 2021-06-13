import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

function pageThree(){

    const {t} =useTranslation();

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="homepage-title">
                    <h1>{t('pageThreeTitle')}</h1>  
                    <p>{t('pageThreeContent')}</p>
                </div>

             </div>
        </div>
        
    </div>
    <Footer />
    </>
);

}


export default pageThree;