import Header from "../components/header";
import Footer from "../components/footer";

function SiteLayout({ children }) {
    return (
        <div className="treesave site-container">
            <section className="header">
                <Header />
            </section>
            <main id="main">
                {children}
            </main>
            <section className="footer">
                <Footer></Footer>
            </section>
        </div>
    )
}

export default SiteLayout;

