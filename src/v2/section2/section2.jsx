import "./s2-constent.css";
import "./s2-responsive.css";
import './base.css'

import vrGuyD from "../../images/desktop/image-interactive.jpg";
import vrGuyM from "../../images/mobile/image-interactive.jpg";
import { useState, useEffect } from "react";

function Section2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 578);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 578);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container s2-container">
      <div className="s2-img">
        <img src={isMobile ? vrGuyM : vrGuyD} alt="vr" className="img-fluid" />
      </div>
      <div className="container s2-content">
        <div className="s2-title-container">
          <h1 className="s2-title">THE LEADER IN INTERATIVE VR</h1>
        </div>
        <div className="s2-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            aliquid, provident quidem, dignissimos consequuntur, quod itaque
            esse molestiae debitis veniam dolores suscipit reiciendis dolore nam
            velit repellat! Explicabo, obcaecati nobis?
          </p>
        </div>
      </div>
    </div>
  );
}
export default Section2;
