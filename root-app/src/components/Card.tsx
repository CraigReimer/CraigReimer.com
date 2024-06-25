interface CardProps {
    text: string;
    imgSrc: string;
    imgAlt: string;
    href: string;
}

function Card({ text, imgSrc, imgAlt, href }: CardProps) {
    return (
        <div className="icon-card justify-content-center">
            <a href={href} target="_blank">
                <img src={imgSrc} className="img-fluid" alt={imgAlt}></img>
            </a>
            <p>{text}</p>
        </div>
    );
}

export default Card;
