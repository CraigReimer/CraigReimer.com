import { useEffect, useState } from "react";
import CardBuilder from "./CardBuilder";
import Button from "../Button";
import experienceIconData from "../../data/experienceIconData.json";

// Build category list from experienceIconData
const categories = [
    ...new Set(
        experienceIconData.map((iconData) => iconData.categories).flat()
    ),
];

function Experience() {
    const [filteredData, setFilteredData] = useState(experienceIconData);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleButtonClick = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filterDataByCategories = () => {
        if (selectedCategories.length === 0) {
            setFilteredData(experienceIconData);
        } else {
            const filteredList = experienceIconData.filter((iconData) =>
                iconData.categories.some((category) =>
                    selectedCategories.includes(category)
                )
            );
            setFilteredData(filteredList);
        }
    };

    useEffect(() => {
        filterDataByCategories();
    }, [selectedCategories]);

    return (
        <div className="row content-row">
            <div className="col-lg-4 mb-4">
                <h2>Experience</h2>
                {categories.map((category) => (
                    <Button
                        key={category}
                        style={"outline-secondary"}
                        myClasses={`m-2 expBtn ${
                            selectedCategories.includes(category)
                                ? "active"
                                : ""
                        }`}
                        onClick={() => handleButtonClick(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <div className="col-lg-8">
                <CardBuilder experienceIconData={filteredData} />
            </div>
        </div>
    );
}

export default Experience;
