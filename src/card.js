import React from 'react';

// The Card component: A reusable UI card element.
// Can display a header, title, text, body content, and a status message.
export function Card(props) {
    // Generate appropriate classes based on the background and text colors provided.
    // By default, it uses "text-white" for white text color.
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        // Main card container with dynamically generated classes.
        <div className={classes()} style={{ maxWidth: "18rem" }}>

            {/* Card header section */}
            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {/* Only render the title if it's provided */}
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                
                {/* Only render the text if it's provided */}
                {props.text && (<p className="card-text">{props.text}</p>)}
                
                {/* Body content of the card */}
                {props.body}

                {/* Only render the status if it's provided */}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}
