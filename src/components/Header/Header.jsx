import avatar from "../../images/avatar.png";

const Header = () => {
    return (
        <header>
            {/* will be a Link */}
            <button>Back to Home Page</button>
            {/* user info */}
            <div>
                <div>
                    <img src={avatar} alt="user avatar" />
                </div>
                {/* render if auth */}
                <p>
                    Hi, User!
                </p>
                {/* render if !auth */}
                <p>
                    Hi, stranger!
                </p>
            </div>
        </header>
    )
}

export default Header;