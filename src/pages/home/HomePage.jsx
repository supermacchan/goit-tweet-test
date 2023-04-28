import WelcomeForm from "components/WelcomeForm/WelcomeForm";
import WelcomeMessage from "components/WelcomeMessage/WelcomeMessage";
import About from "components/About/About";
import Footer from "components/Footer/Footer";

const HomePage = () => {
    return (
        // wrapper with a bg
        <div>
            <section>
                <WelcomeForm />
                <WelcomeMessage />
                {/* <WelcomeForm /> || <WelcomeMessage /> - depending on auth */}
            </section>
            <section>
                <About />
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;