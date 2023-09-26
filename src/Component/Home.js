import Nav from "../Partils/Nav";
import Porject from '../Partils/Project';
import Footer from '../Partils/Footer';
import Typed from "react-typed";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="content">

          <div className="profileimage">
       
          </div>
          <div className="typ_div">
          <Typed style={{ color: 'red' }}
            className="typ"
            strings={[
              
              "I'm Rohit Kafle, a versatile full stack developer who is passionate about creating exceptional digital experiences. Currently, I'm on an exciting journey of expanding my horizons by mastering Data Structures and Algorithms (DSA) through Apna College, while concurrently pursuing a master's degree at Chandigarh University."



            ]}
            typeSpeed={55}
            backSpeed={0}
            attr="placeholder"
            loop
          >
           <textarea readOnly type="text"/>
          </Typed>
          </div>
        </div>
        <Porject/><Footer/>
    
    </>
  );
}
