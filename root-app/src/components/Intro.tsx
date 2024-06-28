function Intro() {
    return (
        <div className="row">
            <div className="col-lg-3 order-lg-last d-flex justify-content-center justify-content-lg-start">
                <img
                    className="intro-img img-fluid"
                    src="./craig.png"
                    alt="A profile photo of Craig Reimer"
                    height="350"
                    width="350"
                ></img>
            </div>
            <div className="col-lg-7 my-auto p-2">
                <h2>Hello!</h2>
                <p>
                    My name is Craig Reimer, and I am currently pursuing an
                    Associate of Applied Science in Software Development at{" "}
                    <a
                        href="https://www.fvtc.edu/program/information-technology/software-development-web/10-152-1/it-software-developer"
                        target="_blank"
                    >
                        Fox Valley Technical College
                    </a>
                    . I am on track to complete my degree in December 2024.
                </p>
                <p>
                    I am currently looking for my first internship where I can
                    sharpen my skills, deepen my understanding, and gain
                    real-world experience working with a team.
                </p>
            </div>
        </div>
    );
}

export default Intro;
