import React from "react";
//import '../css/bootstrap.css';

function aboutMe() {
    return (
        <div className="container-fluid">

            <h1>ABout ME</h1>
        
            <div className="">
                <img className='rounded-circle' style={{ width: '200px', height: '200px' }}
                    alt="avatar" src={'/img/avatar.gif'} />
            </div>

            

        </div>
    )
}

export default aboutMe;