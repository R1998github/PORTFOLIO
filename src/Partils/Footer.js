import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer(){

return(<>

<div className="Footer">

<div className="item1"><a href="https://www.linkedin.com/in/rohit-kafle-3b2354260" target="_blank" rel="noopener noreferrer"><p><FaLinkedin/>linkdin</p> </a></div> 

<div className="item1"><p><FaInstagram/>insta </p></div>

<div className="item1"><p><FaFacebook/>facebook</p></div>

</div>


</>)


}