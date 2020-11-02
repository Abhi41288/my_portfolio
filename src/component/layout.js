import React from 'react';
import backgroundVideo from './video/background.mp4';


const layout = (props) => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                style={{
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
            {props.children}
        </div>
    )
}

export default layout
