import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";
import { Wrapper, Section, List, Button } from "./TweetsPage.styled";
// temp
import users from "../../temp/mockapi.json";

const TweetsPage = () => {
    return (
        <Wrapper>
            <Header />
                <Section>
                    <Filter />
                    <List>
                        {users.map(user => {
                            return (
                                <TweetCard
                                    key={user.id}
                                    name={user.user}
                                    avatar={user.avatar}
                                    tweets={user.tweets}
                                    followers={user.followers}
                                />
                            )   
                        })}
                    </List>
                    <Button type="button">Load More</Button>
                </Section>
        </Wrapper>
    )
}

export default TweetsPage;