import React,{useState,useEffect } from 'react'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';
import {Link,useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import {connect} from 'react-redux';
import {UpdateUser} from '../redux1/actions'
import SwitchLanguage from '../components/SwitchLanguage'


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

function Header(props){
    const {t} =useTranslation();
    const location = useLocation();

    const [ userName, setUserName ] = useState("");
    const [ country, setCountry ] = useState([]);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ country_code, setCountry_Code ] = useState("TR");
    const [ password, setPassword ] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userSide=()=>{
        return(
            <>
                {userName == "" || userName == undefined ? <Button className="login-btn" variant="primary" onClick={handleShow}>{t('logIn')}</Button> :  <DropdownButton id="dropdown-basic-button" title={userName}>
                    <Dropdown.Item href="#/action-1">{userName}</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">{userName}</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={logOut}  >{t('logOut')}</Dropdown.Item>
                </DropdownButton> 
                }
            </>
        )
    }

    const login = ()=>{  
        let UserInfo={
            "name": name,
            "email": email,
            "password": password,
            "country_code": country_code
        }
        
        UpdateUser(name);
        setUserName(props.USERNAME);
        console.warn("UserInfo: ",UserInfo);
        setShow(false)
    }
    const logOut =()=>{
        
        setEmail("");
        setUserName("");
        setName("");
        setPassword("");
        setCountry_Code("TR")

        UpdateUser("");
        
    }

    useEffect(() => {
        setCountry(countryList);
        setUserName(props.USERNAME);
        
      },
[i18next.language,props.USERNAME]);



const changeLocate=(e)=>{
    setCountry_Code(e.target.value)
}

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
    setEmail(e.target.value)


    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(email).toLowerCase());
   if(validEmail)
       console.warn("true");
   else
        console.warn("false");
}

const changePassword=(e)=>{
    setPassword(e.target.value)
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
            <div className="col-md-4">
                <div className="logo-section">
                    <h1>{ currentPage(location.pathname)} </h1>
                </div>
            </div>
            <div className="col-md-6">
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
            </div>

            <div className="col-md-2">
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
        <Modal.Header closeButton>
          <Modal.Title>{t('logIn')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form >
                <h4>{t('logIn')}</h4>  
                <Form.Group controlId="name">
                    <Form.Label className="mt-3">{t('name')}</Form.Label>
                    <Form.Control  type="text" placeholder={t('name')} value={name} onChange={(e)=>changeName(e)}  required/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="mt-3">{t('email')}</Form.Label>
                    <Form.Control  type="email" placeholder={t('email')} value={email} onChange={(e)=>changeEmail(e)}  required/>
                </Form.Group>

                <Form.Group controlId="loginpass">
                    <Form.Label className="mt-3">{t('password')}</Form.Label>
                    <Form.Control  type="password" placeholder={t('password')}  value={password} onChange={(e)=>changePassword(e)} required />
                </Form.Group>
                <Form.Group controlId="locateselector">
                    <Form.Label className="mt-3">{t('location')}</Form.Label>
                    <Form.Control as="select"  onChange={(e)=>changeLocate(e)} defaultValue={country_code} >
                        {country.map((item)=> {
                            return(<option key={item.id} value={item.id} >{item.name}</option> ) 
                        }  )}
                    </Form.Control>
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


//export default Header;
const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.userName,
})
export default connect(mapStateToProps)(Header);