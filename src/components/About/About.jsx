import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { 
    Container,
    Title,
    Text,
    Encouragement,
    Button
} from "./About.styled";

const About = () => {
    const auth = useSelector(selectAuth);

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
            
            { auth
            ?  <>
                <Encouragement>Are you ready to browse?</Encouragement>
                <Link to="/tweets" style={{textDecoration: "none"}}>
                    <Button>
                        Yes! Show me some ITweets!
                    </Button>
                </Link>
            </>
            : <Encouragement>Sign in to get started!</Encouragement>
            }
            
        </Container>
    )
}

export default About;