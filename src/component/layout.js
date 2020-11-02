import React from 'react';
import backgroundVideo from './video/background.mp4';


const layout = (props) => {
    return (
        <div>
            <div style={{
                //position: "absolute",
                top: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }}>
                <video autoPlay loop muted style={{
                    // position: "absolute",
                    // width: "100%",
                    // left: "50%",
                    // top: "50%",
                    // height: "100%",
                    // objectFit: "cover",
                    // transform: "translate(-50%, -50%)",
                    // zIndex: "-1"
                    minWidth: "100%",
                    minHeight: "100%",

                    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
                    width: "auto",
                    height: "auto",

                    /* Center the video */
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: " translate(-50%, -50%)",
                    zIndex: "-1",
                }}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            {props.children}
        </div>
    )
}

export default layout


/*
 <video autoPlay loop muted style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
*/