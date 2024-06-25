import Card from "./Card";
import Button from "./Button";
import experienceIconData from "../data/experienceIconData.json";

const categories = [
    ...new Set(
        experienceIconData.map((iconData) => iconData.categories).flat()
    ),
];

function Experience() {
    return (
        <div className="row content-row">
            <div className="col-lg-4">
                <h2>Experience</h2>
                {categories.map((category) => (
                    <Button
                        key={category}
                        style="outline-secondary"
                        myClasses="m-2 expBtn"
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <div className="col-lg-8">
                <div className="row justify-content-start">
                    {experienceIconData.map((iconData) => (
                        <Card
                            text={iconData.text}
                            imgSrc={iconData.imgSrc}
                            imgAlt={iconData.imgAlt}
                            href={iconData.href}
                            key={iconData.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
