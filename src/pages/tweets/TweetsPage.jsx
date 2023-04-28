import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Footer from "components/Footer/Footer";

const TweetsPage = () => {
    return (
        // wrapper with a bg
        <div>
            <Header />
            <section>
                <Filter />
                {/* tweet cards */}
                <ul>

                </ul>
                <button type="button">Load More</button>
            </section>
            <Footer />
        </div>
    )
}

export default TweetsPage;