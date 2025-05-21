"use strict";
import { useAdContext } from "../../Context/AdContext";
import { useState, useEffect } from "react";
import './Ads.css'
export const TallAd = ({temp, ad, classes}) => {
    const { markClicked, generateAd } = useAdContext();
    const [ activeAd, setActiveAd ] = useState(null);
    console.log(ad);
    useEffect(() => {
        if(!ad) ad = generateAd({temp: temp});
        if (ad) {
            setActiveAd(ad);
        }
    }, []);
    if (!activeAd) {
        return null;
    }
    console.log(`temp: ${temp}`);
    const { title, image, description, link, id } = activeAd;
    return (
        <div className={`FullAd ${classes}`} onClick={() => !temp ? markClicked(id) : null} style={{ backgroundImage: `url(${image})` }}>
            <div>
                <h1>{title}</h1>
                <p className='funnyText'>{description}</p>
            </div>
            <p className="adLink">{link}</p>
        </div>
    )
}

export const WideAd = ({name, image, description, link}) => {
    return (
        <div>
            <h1>Wide Ad</h1>
        </div>
    )
}

export const SquareAd = ({name, image, description, link}) => {
    return (
        <div>
            <h1>Square Ad</h1>
        </div>
    )
}
