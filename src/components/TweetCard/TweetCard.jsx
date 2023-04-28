import logo from "../../images/logo.svg";
import img from "../../images/tweet-card-img.png"

const TweetCard = ({name, avatar, tweets, followers}) => {
    return (
        <div>
            {/* upper card */}
            <div>
                <img src={logo} alt="GoIT logo" />
                <img src={img} alt="GoIT logo" />
                {/* line - ::after */}
            </div>
            {/* lower card */}
            <div>
                <div>
                    <img src={avatar} alt="user avatar" />
                </div>
                <p>{name}</p>
                <p>{tweets} tweets</p>
                <p>{followers} followers</p>
                <button>Follow</button>
            </div>
        </div>
    )
}

export default TweetCard;