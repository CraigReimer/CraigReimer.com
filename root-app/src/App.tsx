import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

const routes: { [key: string]: React.ComponentType } = {
    "/intro": Intro,
    "/about": About,
    "/experience": Experience,
    "/projects": Projects,
    "/connect": Connect,
};

const getPathComponent = (pathname: string): React.ComponentType => {
    return routes[pathname] || Intro;
};

function App() {
    const navLinks = ["Intro", "About", "Experience", "Projects", "Connect"];

    const pathname = window.location.pathname;
    const Content = getPathComponent(pathname);

    return (
        <>
            <header>
                <NavBar items={navLinks} />
            </header>
            <main className="d-flex justify-content-center">
                <section className="content-section d-flex align-items-center">
                    <div className="container outline">
                        <Content />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export default App;
