import React from "react";

function aboutMe() {
    return (
        <div className="container-fluid col-lg-10 flex-column d-flex justify-content-center">
            <div className="d-flex justify-content-center">
                <img className='rounded-circle' style={{ width: '220px', height: '200px' }}
                    alt="avatar" src={'/img/avatar.gif'} />
            </div>
            <div className="d-flex justify-content-center flex-column">
                <h1 className="d-flex justify-content-center"><strong>ABout ME</strong></h1>
                <p>
                    Your story is where you’ll have more of an opportunity to really explain how you got to where you are today. This part of the ‘About Me’ page should be more meaningful as it’s an opportunity to connect with your readers on a deeper level. If your customers know your story and any struggles you endured, they’re inevitably going to feel more connected to you.
                </p>
            </div>
        </div>
    )
}

export default aboutMe;