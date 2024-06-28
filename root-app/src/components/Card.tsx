interface CardProps {
    text: string;
    imgSrc: string;
    imgAlt: string;
    href: string;
}

function Card({ text, imgSrc, imgAlt, href }: CardProps) {
    return (
        <div className="card icon-card mb-3">
            <div className="row g-0">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <a href={href} target="_blank">
                        <img
                            src={imgSrc}
                            className="img-fluid"
                            alt={imgAlt}
                        ></img>
                    </a>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{text}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
