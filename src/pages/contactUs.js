import React,{useState,useEffect} from 'react'
import Header from '../layouts/header'
import { useTranslation } from 'react-i18next'
import { Button,Modal,Form,DropdownButton,Dropdown,Alert } from 'react-bootstrap';


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

    const [ emailClass, setEmailClass ] = useState('');
    const [ phoneClass, setPhoneClass ] = useState('');

    const [ emailControl, setEmailControl ] = useState(false);
    const [ phoneControl, setPhoneControl ] = useState(false);

    const [ nameControl, setNameControl ] = useState(false);

    const [ emailErrorMessage, setEmailErrorMessage ] = useState(false);
    const [ phoneErrorMessage, setPhoneErrorMessage ] = useState(false);
    const [ nameErrorMessage, setNameErrorMessage ] = useState(false);
    //const [ phoneControl, setPhoneControl ] = useState('');

    useEffect(() => {
        setCountry(countryList);
        
      },
[]);



const sendForm=()=>{
    let contactInfo={
        "name": name,
        "email": email,
        "phonenumber": phone,
        "country_code": country_code,
        "text": text,
    }
if(name!=='' && name.length >= 4){
    setNameErrorMessage(false);
    if(emailControl){
        setEmailErrorMessage(false);
         if(phoneControl){
             
            console.warn("UserInfo: ",contactInfo);
            setPhoneErrorMessage(false);
            //axios
         }
         else{
            setPhoneErrorMessage(true);
         }
     }
     else{
        setEmailErrorMessage(true);
     }
}
else{
    setNameErrorMessage(true);
}


    //console.warn("UserInfo: ",contactInfo);
}


const changeLocate=(e)=>{
    setCountry_Code(e.target.value)
}

const changeName=(e)=>{
    setName(e.target.value)
}

const changeEmail=(e)=>{
   
    setEmail(e.target.value)
    const regex = /\S+@\S+/;
    var validEmail = regex.test(String(e.target.value).toLowerCase());
   if(validEmail){
    setEmailClass('green-border');
    setEmailControl(true);
    console.warn("true");
   }
   else{
        console.warn("false");
        setEmailControl(false);
        setEmailClass('red-border');
   }
   
}
const changePhone=(e)=>{
    setPhone(e.target.value)


    if (e.target.value !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
      
        if (!pattern.test(e.target.value)) {
          setPhoneClass('red-border');
          console.warn("phone false");
          setPhoneControl(false);
          //errors["phone"] = "Please enter only number.";
      
        }else if(e.target.value.length != 10){
          setPhoneClass('red-border');
          setPhoneControl(false);
          console.warn("phone false");
          //errors["phone"] = "Please enter valid phone number.";
      
        }
        else{
            console.warn("phone true");
            setPhoneClass('green-border');
            setPhoneControl(true);
        }
      
      }
}
const changeText=(e)=>{
    setText(e.target.value)
}

const emailC=()=>{
    if(emailControl !==2){
        if(emailControl ==0){
            setEmailClass('red-border');
        }
        else if(emailControl ==1){
            setEmailClass('green-border');
        }
    }
    return emailClass
     
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
                        <div className={nameErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('nameErrorMessage')}
                        </div>
                    </Form.Group>
                    <Form.Group controlId="cemail">
                        <Form.Label className="mt-3">{t('email')}</Form.Label>
                        <Form.Control   className={emailClass}  type="email" placeholder={t("email")}  value={email} onChange={(e)=>changeEmail(e)}  required/>
                        <div className={emailErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('emailErrorMessage')}
                        </div>
                    </Form.Group>
                    <Form.Group controlId="cphone">
                        <Form.Label className="mt-3">{t('phone')}</Form.Label>
                        <Form.Control maxLength="10"  className={phoneClass}  pattern="[0-9]*"  type="phone" placeholder={t("phone")}   value={phone} onChange={(e)=>changePhone(e)}  required/>
                        <div className={phoneErrorMessage==false ? 'd-none' : 'danger-message'} >
                            {t('phoneErrorMessage')}
                        </div>
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