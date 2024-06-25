import Card from "./Card";
import connectIconData from "../data/connectIconData.json";

function Connect() {
    return (
        <div className="row content-row">
            <div className="col-lg-4 my-auto">
                <h2>Connect</h2>
            </div>
            <div className="col-lg-8 my-auto">
                <div className="row justify-content-start">
                    {connectIconData.map((iconData) => (
                        <Card
                            text={iconData.text}
                            imgSrc={iconData.imgSrc}
                            imgAlt={iconData.imgAlt}
                            href={iconData.href}
                            key={iconData.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Connect;
