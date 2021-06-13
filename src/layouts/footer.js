import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

function footer(){


    const {t} =useTranslation();

    return(
        <>
        <footer>
            <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
             
            </div>
            <div className="col-md-8">
                <div className="menu">
                    <ul>
                        <Link to="/">{t("homePage")}</Link>
                        <Link to={{
                            pathname:"pageone",
                            state:{
                                pageName:"pageOne"
                            }}}>{t("pageOne")}</Link>
                        <Link to="pagetwo">{t("pageTwo")}</Link>
                        <Link to="pagethree">{t("pageThree")}</Link>
                        <Link to="pagefour">{t("pageFour")}</Link>
                        <Link to="contactus">{t("contactUs")}</Link>
                    </ul>
                </div>
                <p>&copy; {t('copyright')} </p>
            </div>

            <div className="col-md-2">
            </div>
        </div>
        </div>
    </footer>
    </>
    )
}

export default footer;