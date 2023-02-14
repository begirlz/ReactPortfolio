import React from "react";

function aboutMe() {
    return (
        <div className="container-fluid col-lg-8 flex-column d-flex justify-content-center">
            <div className="d-flex justify-content-center">
                <img className='rounded-circle' style={{ width: '220px', height: '200px' }}
                    alt="avatar" src={'%PUBLIC_URL%/img/avatar.gif'} />
            </div>
            <div className="d-flex justify-content-center flex-column">
                <h1 className="d-flex justify-content-center"><strong>ABout ME</strong></h1>
                <div className="">
                    <div className="container-fluid">
                        <h2 className="card-header">Introduction</h2>
                        <p>
                            The introduction of your ‘About Me’ page is definitely one of the most important parts. Your introduction should hook your readers right away, but it shouldn’t be anything too lengthy or confusing. Two or three simple sentences should suffice for an introduction. Your introduction should convey who you are, what your main qualifications are, and what you can bring to the table.
                        </p>
                    </div>
                    <div className="container-fluid">
                        <h2 className="card-header">Mission statement</h2>
                        <p>
                        Your mission statement is a single sentence that clearly states your overall goal. A good mission statement should be straight to the point, but memorable enough that your readers are still thinking about your business after they’ve exited your website. A mission statement should include the purpose, values, and goals of your business.
                        </p>
                    </div>
                    <div className="container-fluid">
                        <h2 className="card-header">Your story</h2>
                        <p>
                        Your story is where you’ll have more of an opportunity to really explain how you got to where you are today. This part of the ‘About Me’ page should be more meaningful as it’s an opportunity to connect with your readers on a deeper level. If your customers know your story and any struggles you endured, they’re inevitably going to feel more connected to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutMe;