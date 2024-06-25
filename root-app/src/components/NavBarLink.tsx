interface NavBarLinkProps {
    href: string;
    children: string;
}

function NavBarLink({ href, children }: NavBarLinkProps) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "nav-item active" : "nav-item"}>
            <a href={href} className="nav-link">
                {children}
            </a>
        </li>
    );
}

export default NavBarLink;
