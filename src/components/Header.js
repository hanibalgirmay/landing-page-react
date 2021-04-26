import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Header.css";

function HeaderSection({
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    return (
        <>
            <div
                className={
                    lightBg ? "home__header-section" : "home__header-section darkBg"
                }
            >
                <div className="container">
                    <div style={{ display: "flex", flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }} className="row home__header-row">
                        <div className="col">
                            <div className="home__header-text-wrapper">
                                <div className="top-Line">
                                    {topLine}
                                </div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                <p className={lightTextDesc ? 'home__header-subtitle' : 'home__header-subtitle dark'}>{description}</p>
                                <Link to="/sign-up">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="col">
                            <div className="home__header-img-wrapper">
                                <img src={img} alt={alt} className="home__header-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderSection;
