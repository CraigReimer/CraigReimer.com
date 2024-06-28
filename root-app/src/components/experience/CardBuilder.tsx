import Card from "../Card";

interface iconData {
    text: string;
    imgSrc: string;
    imgAlt: string;
    href: string;
    categories: string[];
}

interface CardBuilderProps {
    experienceIconData: iconData[];
}

function CardBuilder({ experienceIconData }: CardBuilderProps) {
    return (
        <div className="row justify-content-center">
            {experienceIconData.map((d) => (
                <Card
                    text={d.text}
                    imgSrc={d.imgSrc}
                    imgAlt={d.imgAlt}
                    href={d.href}
                    key={d.text}
                />
            ))}
        </div>
    );
}

export default CardBuilder;
