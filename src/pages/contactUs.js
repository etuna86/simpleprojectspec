import React,{useState,useEffect} from 'react'
import Header from '../layouts/header'
import { useTranslation } from 'react-i18next'
import { Button,Modal,Form,DropdownButton,Dropdown } from 'react-bootstrap';


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



function contactUs(){

    const {t} =useTranslation();

    const [ country, setCountry ] = useState([]);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ country_code, setCountry_Code ] = useState("TR");
    const [ text, setText ] = useState("");

    useEffect(() => {
        setCountry(countryList);
        
      },
[]);



const sendForm=()=>{
    let contactInfo={
        "name": name,
        "email": email,
        "phone": phone,
        "country_code": country_code,
        "text": texts,
    }
    console.warn("UserInfo: ",contactInfo);

}


const changeLocate=(e)=>{
    setCountry_Code(e.target.value)
}

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
    setEmail(e.target.value)
}
const changePhone=(e)=>{
    setPhone(e.target.value)
}
const changeText=(e)=>{
    setText(e.target.value)
}

return(
    <>
    <Header />
    <div className="homepage container-fluid">
    <div className="bg-half-grey"></div>
        <div className="row justify-content-center">
            <div className="col-6 ">
                <div className="form-section">
                  <Form >
                    <h4>{t('contactUs')}</h4>  
                    <Form.Group controlId="cname">
                        <Form.Label className="mt-3">{t('name')}</Form.Label>
                        <Form.Control  type="text" placeholder={t("name")} value={name} onChange={(e)=>changeName(e)}  required/>
                    </Form.Group>
                    <Form.Group controlId="cemail">
                        <Form.Label className="mt-3">{t('email')}</Form.Label>
                        <Form.Control  type="email" placeholder={t("email")}  value={email} onChange={(e)=>changeEmail(e)}  required/>
                    </Form.Group>
                    <Form.Group controlId="cphone">
                        <Form.Label className="mt-3">{t('phone')}</Form.Label>
                        <Form.Control  type="phone" placeholder={t("phone")}   value={phone} onChange={(e)=>changePhone(e)}  required/>
                    </Form.Group>
                    <Form.Group controlId="clocateselector">
                        <Form.Label className="mt-3">{t('location')}</Form.Label>
                        <Form.Control as="select"  onChange={(e)=>changeLocate(e)} defaultValue={country_code} >
                            {country.map((item)=> {
                                return(<option key={item.id} value={item.id} >{item.name}</option> ) 
                            }  )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="ctext"  className="mt-3">
                        <Form.Label className="mt-3">{t("message")}</Form.Label>
                        <Form.Control as="textarea" rows={3} value={text} onChange={(e)=>changeText(e)} required />
                    </Form.Group>
                    <Button className="contact-btn mt-3" variant="primary" type="button" onClick={sendForm}  >
                        {t('send')}
                    </Button>
                </Form>
                </div>
             </div>
        </div>
        
    </div>
    </>
);

}


export default contactUs;