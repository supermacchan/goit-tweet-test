import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <h3>Welcome to GoIT Tweets!</h3>
            <p>
                Here you can follow skilled developers and check their
                ITweets for some useful tips and tricks that can help you
                improve your programming skills. At this time, it is not
                possible to join the community and create your own tweets -
                only reading is allowed. But we are working on expanding 
                and adding this functionality in the future, so please 
                stay tuned!
            </p>
            {/* the part below will be rendered if auth */}
            <h4>Are you ready to browse?</h4>
            {/* will be a Link */}
            <Link to="/tweets">Yes! Show me some ITweets!</Link>
        </>
    )
}

export default About;