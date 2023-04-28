import { Link } from "react-router-dom";
import { 
    Container,
    Title,
    Text,
    Encouragement,
    Button
} from "./About.styled";

const About = () => {
    return (
        <Container>
            <Title>Welcome to GoIT Tweets!</Title>
            <Text>
                Here you can follow skilled developers and check their
                ITweets for some useful tips and tricks that can help you
                improve your programming skills. At this time, it is not
                possible to join the community and create your own tweets -
                only reading is allowed. But we are working on expanding 
                and adding this functionality in the future, so please 
                stay tuned!
            </Text>
            {/* the part below will be rendered if auth */}
            <Encouragement>Are you ready to browse?</Encouragement>
            <Link to="/tweets" style={{textDecoration: "none"}}>
                <Button>
                    Yes! Show me some ITweets!
                </Button>
            </Link>
            
        </Container>
    )
}

export default About;