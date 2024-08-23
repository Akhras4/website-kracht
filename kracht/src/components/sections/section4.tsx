import React, { useState, useRef, useEffect } from "react"
import './section4.css'


interface Item {
    title: string;
    description: string;
}

interface section4Props {
    imgScr: string[],
    imgAlt: string,
    items: {
        item: Item;
        item1: Item;
        item2: Item;
    };

}

const Section4: React.FC<section4Props> = ({
    imgScr,
    imgAlt,
    items
}) => {
    const [imgSlider, setImgSlider] = useState<string>(imgScr[0])
    const sliderRef = useRef<HTMLImageElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex != imgScr.length - 1 ? prevIndex + 1 : 0));
        }, 10000)
    }, [imgScr.length])
    useEffect(() => {
        setImgSlider(imgScr[currentIndex]);
    }, [currentIndex, imgScr]);
    const itemsArray = Object.entries(items);

    return (
        <>
            <section className="section4">
                <div className="container">
                    <div className="imgcontaier">
                        <div>
                            <img src={imgSlider} alt={imgAlt} ref={sliderRef} />
                        </div>
                    </div>
                        {itemsArray.map(([key, item], index) => (
                            <div key={key} className={`${key}`}>
                                <div className="itemcontainer">
                                    <h2 className="Kernwaarde">Kernwaarde</h2>
                                    <h2 className="number">{index + 1}</h2>
                                    <h2>{item.title}</h2>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
            </section >
        </>
    )
}
export default Section4