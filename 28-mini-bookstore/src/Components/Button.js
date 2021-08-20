// import React, { Component } from 'react';
// class Buttons extends Component {
   
//     render() { 
//         return (
//             <button type="button" className="delete-me">
//                 Delete Me
//             </button>
//          );
//     }
// }
 
// export default Buttons;

//import React, { Component } from 'react';
import React from 'react'; 

export default function Buttons({ handleDelete }) {
    
    return (
        <div>
            <button type="button" className="delete-me" onClick={handleDelete}>
                Delete Me
            </button>
        </div>
    )
}
