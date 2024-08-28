import React from 'react'
import TextButton from '../TextButton/TextButton';
import './section2.css'
import Unorderlist from './unorderlist';
import Imgbg from '../imgbg/imgbg';
import Buttons from '../buttons/buttons';

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
    children?: React.ReactNode;
    forwardSection?: () => void;
    backwardSection?: () => void;
    activeSection?: number;
    childrenCount?: number;
    childType?:string

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
    children,
    forwardSection,
    backwardSection,
    activeSection,
    childrenCount,
    childType

}) => {
    return (
        <section className='section2'>
            {direction === 'row' ? <Imgbg /> : null}
            {direction === 'row-reverse' ? (
                <>
                    <div className='part2'>
                        <div className='continer'>
                            {titlePargraf ? <p id='titlePargraf'>{titlePargraf}</p> : null}
                            {title ?<h1>{title}</h1> :null}
                            {displayType === 'pargraph' ? (
                                <>{description.map((item, index) => (<p key={index} className="description-paragraph">{item}</p>))}</>
                            ) : (
                                <Unorderlist list={description}
                                />
                            )}

                        </div>
                        {childType==='form' && children}
                        {text  ? <TextButton text={text} link={link} /> :null}
     
                    </div>
                    <div className='part1'>
                        <img src={imgSrc} alt={imgAlt} />
                        { childType!=='form' && children}
                        {forwardSection && backwardSection && (
                            <>
                                <Buttons forwardSection={forwardSection} backwardSection={backwardSection} />
                                <div className='flex gap-3 absolute -top-40px right-4'>
                                    <p id='titlePargraf'>Topinitiatieven</p><p className='font-semibold'> {activeSection}/{childrenCount} </p>
                                </div>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div className='part1'>
                        <img src={imgSrc} alt={imgAlt} />
                        { childType!=='form' && children}
                        {forwardSection && backwardSection && (
                            <>
                                <Buttons forwardSection={forwardSection} backwardSection={backwardSection} />
                                <div className='flex gap-3 absolute -top-40px right-4'>
                                    <p id='titlePargraf'>Topinitiatieven</p><p className='font-semibold'> {activeSection}/{childrenCount} </p>
                                </div>
                            </>
                        )}
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

                        {childType==='form' && children}
                        {text ? (<TextButton text={text} link={link} />) : (null)}

                    </div>

                </>
            )}
        </section>
    )
}
export default section2