import './section2.css'
import vrGuy from '../images/desktop/image-interactive.jpg'

function Section2(){
    return(
        <>
            <div className="section2-container">
                <img
                    src={vrGuy}
                    className="img-fluid vrGuyImg"
                    alt=""
                />
                <div className='section2-content'>
                    <div className="section2-text-container">
                        <h1>THE LEADER IN <br /> INTERATIVE VR</h1>
                        <p>Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium alias a omnis quis neque, nesciunt, nam voluptatum deserunt ea exercitationem doloremque labore! Quam magnam delectus, minus asperiores assumenda nesciunt!ipsum dolor, sit amet consectetur adipisicing elit. Saepe earum alias doloremque! Harum mollitia rem neque perspiciatis. Labore aspernatur, beatae vitae earum </p>
                    </div>
                </div>
                
            </div>
        </>
    )

}
export default Section2;