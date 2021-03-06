import React,{useState,useEffect } from 'react'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {Link,useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import {connect} from 'react-redux';
import {UpdateUser} from '../redux1/actions'
import {UpdateEmail} from '../redux1/actions'
import SwitchLanguage from '../components/SwitchLanguage'

/*
const countryList = [
	{ id: "TR", name: "Turkey" },
	{ id: "US", name: "United States of America" },
	{ id: "GB", name: "United Kingdom" },
	{ id: "DE", name: "Germany" },
	{ id: "SE", name: "Sweden" },
	{ id: "KE", name: "Kenya" },
	{ id: "BR", name: "Brazil" },
	{ id: "ZW", name: "Zimbabwe" }
]
*/
function Header(props){
    const {t} =useTranslation();
    const location = useLocation();

    const [ userName, setUserName ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");
    //const [ country, setCountry ] = useState([]);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ country_code, setCountry_Code ] = useState("TR");
    const [ password, setPassword ] = useState("");
    const [ open, setOpen ] = useState(false);
    const [ emailControl, setEmailControl ] = useState(false);

    const [ nameControl, setNameControl ] = useState(false);

    const [ emailErrorMessage, setEmailErrorMessage ] = useState(false);
    const [ phoneErrorMessage, setPhoneErrorMessage ] = useState(false);
    const [ nameErrorMessage, setNameErrorMessage ] = useState(false);
    const [ passErrorMessage, setPassErrorMessage ] = useState(false);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const userSide=()=>{
        return(
            <>
                {userName == "" || userName == undefined ? <Button className="login-btn" variant="primary" onClick={handleShow}>{t('logIn')}</Button> :  <DropdownButton id="dropdown-basic-button" title={userName}>
                    <Dropdown.Item href="#/action-2">{userEmail}</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={logOut}  >{t('logOut')}</Dropdown.Item>
                </DropdownButton> 
                }
            </>
        )
    }

    const login = ()=>{  

        if(name!=='' && name.length >= 4){
            setNameErrorMessage(false);
            if(emailControl){
                setEmailErrorMessage(false);
                if(password!=='' && password.length >= 6){
                    let UserInfo={
                        "name": name,
                        "email": email,
                        "password": password,
                    }
                    setPassErrorMessage(true);          
                    UpdateUser(name);
                    UpdateEmail(email);
                    setUserName(props.USERNAME);
                    setUserEmail(props.USEREMAIL);
                    console.warn("UserInfo: ",UserInfo);
                    setShow(false)
                    //axios
                }
                else{
                    setPassErrorMessage(true); 
                }
             }
             else{
                setEmailErrorMessage(true);
             }
        }
        else{
            setNameErrorMessage(true);
        }
        
    }
    const logOut =()=>{       
        setEmail("");
        setUserName("");
        setName("");
        setPassword("");
        //setCountry_Code("TR")
        UpdateUser("");   
    }

    useEffect(() => {
        //setCountry(countryList);
        setUserName(props.USERNAME);
        setUserEmail(props.USEREMAIL);
        
      },
[i18next.language,props.USERNAME]);

/*
const changeLocate=(e)=>{
    setCountry_Code(e.target.value)
} */

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
    setEmail(e.target.value)
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(e.target.value).toLowerCase());
   if(validEmail)
        setEmailControl(true);
   else
        setEmailControl(false);
}

const changePassword=(e)=>{
    setPassword(e.target.value)
}
const openMenu=()=>{
    setOpen(!open);
}

const currentPage=(currentPageName)=>{
    switch (currentPageName) {
        case '/':
            return t('webSite')
            break;
        case '/pageone':
            return t('pageOne')
            break;
        case '/pagetwo':
            return t('pageTwo')
            break;
        case '/pagethree':
            return t('pageThree')
            break;
        case '/pagefour':
            return t('pageFour')
            break;
            case '/contactus':
                return t('contactUs')
                break;
        default:
            return t('homePage')
            break;
    }

}


return(
    <>
    <header>
        <div className="row">
            <div className="col-md-3 col-10">
                <div className="logo-section">
                 <h1><i className="fab fa-accusoft"></i> { currentPage(location.pathname)} </h1>
                </div>
            </div>
            <div className="col-md-7 col-2">
                <button className="mobile-menu-btn d-block d-sm-none" onClick={openMenu}>
                {open==true ? <i className="fas fa-times"></i> : <i className="fas fa-bars"> </i> }
                </button>
                <div className={"menu"}>
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
            </div>
            <div className="col-12 d-block d-sm-none">
            <div className={open==false ? "mobile-menu  " : "mobile-menu open"}>
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
                    <div className="menu-bottom" >
                    <SwitchLanguage />  
                    {userSide()}
                </div>
                </div>
            </div>                
            <div className="col-md-2 col-sm-6 d-none d-sm-block">
                <SwitchLanguage />  
                {userSide()}
            </div>
        </div>
    </header>
 

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>{t('logIn')}</Modal.Title>
          <div > <SwitchLanguage />  </div>
        </Modal.Header>
        <Modal.Body>
            <Form >
                <h4>{t('logIn')}</h4>  
                <Form.Group controlId="name">
                    <Form.Label className="mt-3">{t('name')}</Form.Label>
                    <Form.Control  type="text" placeholder={t('name')} value={name} onChange={(e)=>changeName(e)}  required/>
                    <div className={nameErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('nameErrorMessage')}
                        </div>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="mt-3">{t('email')}</Form.Label>
                    <Form.Control  type="email" placeholder={t('email')} value={email} onChange={(e)=>changeEmail(e)}  required/>
                    <div className={emailErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('emailErrorMessage')}
                        </div>
                </Form.Group>

                <Form.Group controlId="loginpass">
                    <Form.Label className="mt-3">{t('password')}</Form.Label>
                    <Form.Control  type="password" placeholder={t('password')}  value={password} onChange={(e)=>changePassword(e)} required />
                    <div className={passErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('passErrorMessage')}
                        </div>
                </Form.Group>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button className="login-btn" variant="primary" type="button" onClick={login}  >
            {t('logIn')}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
            {t('close')}
        </Button>
        </Modal.Footer>
      </Modal>
    </>
    
);

}

const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
    USEREMAIL: state.reducer1.userEmail,
})
export default connect(mapStateToProps)(Header);