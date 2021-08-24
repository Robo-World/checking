import React from 'react'
import b1 from './1.pdf'
import b2 from './1.pdf'
import vid from './VID.mp4'
import { Link } from "react-router-dom";
function AboutUspage() {
    return(
        <div id="aboutuspage">
            <div>
                <p>
                <video height="500" controls>
  <source src={vid} type="video/mp4"/>

     </video>
                </p>
            </div>
<Link to={b1} className="download" download target="_blank">DOWNLOAD BROCHURE 1</Link>
<Link to={b2} className="download" download target="_blank">DOWNLOAD BROCHURE 2</Link>
        </div>
    )
}

export default AboutUspage;