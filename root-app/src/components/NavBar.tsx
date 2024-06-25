import NavBarLink from "./NavBarLink";

interface NavBarProps {
    items: string[];
}

function NavBar({ items }: NavBarProps) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top justify-content-end">
            <div className="container justify-content-end">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto px-4 fill-dark my-rounded">
                    {items.map((item) => (
                        <NavBarLink href={`/${item.toLowerCase()}`} key={item}>
                            {item}
                        </NavBarLink>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
