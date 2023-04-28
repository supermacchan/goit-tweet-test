import WelcomeForm from "components/WelcomeForm/WelcomeForm";

const HomePage = () => {
    return (
        // wrapper with a bg
        <div>
            <section>
                <WelcomeForm />
                {/* <WelcomeForm /> || <WelcomeMessage /> - depending on auth */}
            </section>
            <section>
                {/* <About /> */}
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage;