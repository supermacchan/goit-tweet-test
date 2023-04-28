import avatar from "../../images/avatar.png";

const WelcomeMessage = () => {
    return (
        <> 
            <div>
                <img src={avatar} alt="user avatar" />
            </div>
            <h2>Hi, User! Nice to see you!</h2>
            <h3>Are you ready to browse?</h3>
        </>
    )
}

export default WelcomeMessage;