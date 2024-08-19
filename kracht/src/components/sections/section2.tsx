import React from 'react'
import TextButton from '../TextButton/TextButton';
import './section2.css'
import Unorderlist from './unorderlist';
import Imgbg from '../imgbg/imgbg';


interface section2Props {
    titlePargraf: string;
    title: string;
    description: React.ReactNode[];
    imgSrc: string;
    imgAlt: string;
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    text: string;
    link: string;
    displayType: 'list' | 'pargraph'
}

const section2: React.FC<section2Props> = ({
    direction,
    title,
    description,
    imgSrc,
    imgAlt,
    link,
    text,
    titlePargraf,
    displayType,

}) => {

    return (
        <section className='section2'>
            {direction === 'row' ? <Imgbg /> : null}
            {direction === 'row-reverse' ? (
                <>
                    <div className='part2'>
                        <div className='continer'>
                            {titlePargraf ? <p id='titlePargraf'>{titlePargraf}</p> : null}
                            <h1>{title}</h1>
                            {displayType === 'pargraph' ? (
                                <>
                                    {description.map((item, index) => (
                                        <p key={index} className="description-paragraph">{item}</p>
                                    ))}
                                </>
                            ) : (
                                <Unorderlist
                                    list={description}
                                />
                            )}

                        </div>
                        <TextButton text={text} link={link} />
                    </div>
                    <div className='part1'>
                        <img src={imgSrc} alt={imgAlt} />
                    </div>
                </>
            ) : (
                <>
                    <div className='part1'>
                        <img src={imgSrc} alt={imgAlt} />
                    </div>
                    <div className='part2'>
                        <div className='continer'>
                            {titlePargraf ? <p id='titlePargraf'>{titlePargraf}</p> : null}
                            <h1>{title}</h1>
                            {displayType === 'pargraph' ? (
                                <>
                                    {description.map((item, index) => (
                                        <p key={index} className="description-paragraph">{item}</p>
                                    ))}
                                </>
                            ) : (
                                <Unorderlist
                                    list={description}
                                />
                            )}
                        </div>
                        {text ? (<TextButton text={text} link={link} />) : (null)}

                    </div>

                </>
            )}
        </section>
    )
}
export default section2