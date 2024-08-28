import React, { useState, useRef, useEffect } from "react";
import './section4.css';
import { useMediaQuery } from "@uidotdev/usehooks";

interface Item {
    title: string;
    description: string;
}

interface Section4Props {
    imgScr: string[];
    imgAlt: string;
    time: number;
    items: {
        item1: Item;
        item2: Item;
        item3: Item;
    };
}

const Section4: React.FC<Section4Props> = ({
    imgScr,
    imgAlt,
    time,
    items
}) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
    const [imgSlider, setImgSlider] = useState<string>(imgScr[0]);
    const [itemSlider, setItemSlider] = useState<Item>(Object.values(items)[0]);
    const sliderRef = useRef<HTMLImageElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsArray = Object.values(items); // Convert items object to array

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex < imgScr.length - 1 ? prevIndex + 1 : 0));
        }, time);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [imgScr.length, time]);

    useEffect(() => {
        setImgSlider(imgScr[currentIndex]);
        if (isSmallDevice) {
            setItemSlider(itemsArray[currentIndex]);
        }
    }, [currentIndex, imgScr, isSmallDevice, itemsArray]);

    return (
        <section className="section4">
            <div className="container">
                <div className="imgcontaier">
                    <div>
                        <img src={imgSlider} alt={imgAlt} ref={sliderRef} />
                    </div>
                </div>
                    {!isSmallDevice && itemsArray.map((item, index) => (
                        <div key={`item-${index}`} className={`item${index+1}`}>
                            <div className="itemcontainer">
                                <h2 className="Kernwaarde">Kernwaarde</h2>
                                <h2 className="number">{index + 1}</h2>
                                <h2>{item.title}</h2>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                {isSmallDevice && (
                    <div className="itemcontainer flex flex-col mx-2 gap-4">
                        <div className="flex flex-row ">
                        <h2 className="Kernwaarde ">Kernwaarde</h2>
                        <h2 className="number ">{currentIndex + 1}</h2>
                        </div>
                        <h2>{itemSlider.title}</h2>
                        <p>{itemSlider.description}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Section4;
