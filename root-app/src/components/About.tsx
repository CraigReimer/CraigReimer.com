import Button from "./Button";

function About() {
    return (
        <div className="row content-row">
            <div className="col-lg-4 mb-4">
                <h2>About</h2>
                <Button
                    style={"outline-secondary"}
                    myClasses={"m-2"}
                    onClick={() => console.log("Clicked!")}
                >
                    Short Bio
                </Button>
                <Button
                    style={"outline-secondary"}
                    myClasses={"m-2"}
                    onClick={() => console.log("Clicked!")}
                >
                    Long Bio
                </Button>
            </div>
            <div className="col-lg-8"></div>
        </div>
    );
}

export default About;
