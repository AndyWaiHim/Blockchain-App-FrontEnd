import React from "react"


function About() {
    // useEffect(() => {
    //     document.title = "About Us"
    // }, [])
    document.title = "About Us"

    return (
        <div>
            <h2 className="display-4">Learn More About AndyBimBam</h2>
            <p className="lead">
                This is the <strong>about page</strong>. Dolor sit amet consectetur adipisicing elit. Itaque quasi natus fugit ab laudantium dolores, dicta blanditiis sit eum perferendis minima sunt repudiandae voluptates tempore. Fuga dicta ipsa beatae vel?
            </p>
            <div className="row">
                <div className="col-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
                </div>
                <div className="col-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
                </div>
            </div>
        </div>
    )
}

export default About
