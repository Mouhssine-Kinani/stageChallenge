import { useState, useEffect } from 'react';
import './section3.css';

// Mobile images
import deepEarth from '../images/mobile/image-deep-earth.jpg';
import nightArcade from '../images/mobile/image-night-arcade.jpg';
import soccerTeamVR from '../images/mobile/image-soccer-team.jpg';
import theGrid from '../images/mobile/image-grid.jpg';
import fromUpAboveVr from '../images/mobile/image-from-above.jpg';
import pocketBorealis from '../images/mobile/image-pocket-borealis.jpg';
import theCuriosity from '../images/mobile/image-curiosity.jpg';
import makeItFisheye from '../images/mobile/image-fisheye.jpg';

// Desktop images
import deepEarth2 from '../images/desktop/image-deep-earth.jpg';
import nightArcade2 from '../images/desktop/image-night-arcade.jpg';
import soccerTeamVR2 from '../images/desktop/image-soccer-team.jpg';
import theGrid2 from '../images/desktop/image-grid.jpg';
import fromUpAboveVr2 from '../images/desktop/image-from-above.jpg';
import pocketBorealis2 from '../images/desktop/image-pocket-borealis.jpg';
import theCuriosity2 from '../images/desktop/image-curiosity.jpg';
import makeItFisheye2 from '../images/desktop/image-fisheye.jpg';

function Section3() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 578);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 578);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dataMobile = [
        { img: deepEarth, title: 'DEEP EARTH' },
        { img: nightArcade, title: 'NIGHT ARCADE' },
        { img: soccerTeamVR, title: 'SOCCER TEAM VR' },
        { img: theGrid, title: 'THE GRID' },
        { img: fromUpAboveVr, title: 'FROM UP ABOVE VR' },
        { img: pocketBorealis, title: 'POCKET BOREALIS' },
        { img: theCuriosity, title: 'THE CURIOSITY' },
        { img: makeItFisheye, title: 'MAKE IT FISHEYE' },
    ];

    const dataDesktop = [
        { img: deepEarth2, title: 'DEEP EARTH' },
        { img: nightArcade2, title: 'NIGHT ARCADE' },
        { img: soccerTeamVR2, title: 'SOCCER TEAM VR' },
        { img: theGrid2, title: 'THE GRID' },
        { img: fromUpAboveVr2, title: 'FROM UP ABOVE VR' },
        { img: pocketBorealis2, title: 'POCKET BOREALIS' },
        { img: theCuriosity2, title: 'THE CURIOSITY' },
        { img: makeItFisheye2, title: 'MAKE IT FISHEYE' },
    ];

    const data = isMobile ? dataMobile : dataDesktop;

    return (
        <div className="container s3-container">
            <h1 id="s3-title">OUR CREATIONS</h1>

            <div className="img-container">
                {data.map((item, index) => (
                    <div className="image-wrapper" key={index}>
                        <h1 className="title">{item.title}</h1>
                        <img src={item.img} className="img-fluid" alt={item.title} />
                    </div>
                ))}
            </div>
            <button className="s3-btn">SEE ALL</button>
        </div>
    );
}

export default Section3;