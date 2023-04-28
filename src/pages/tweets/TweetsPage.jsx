import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";

// temp
import users from "../../temp/mockapi.json";

console.log(users);

const TweetsPage = () => {
    return (
        // wrapper with a bg
        <div>
            <Header />
            <section>
                <Filter />
                {/* tweet cards */}
                <ul>
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
                </ul>
                <button type="button">Load More</button>
            </section>
        </div>
    )
}

export default TweetsPage;