import React, { useRef } from 'react'
import TextButton from '../TextButton/TextButton';
import './section2.css'
import Unorderlist from './unorderlist';
import Imgbg from '../imgbg/imgbg';
import Buttons from '../buttons/buttons';
import { motion, useInView } from 'framer-motion'
import { useMediaQuery } from "@uidotdev/usehooks";

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
    childType?: string
    InViewSlider?: boolean

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
    childType,
    InViewSlider

}) => {
    const imgRef = useRef(null);
    const continerRef = useRef(null);
    const isInView = useInView(imgRef, { once: true })
    const isInViewcontiner = useInView(continerRef, { once: true })
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return (
        <section className='section2'>
            {direction === 'row' ? <Imgbg /> : null}
            {!isSmallDevice && direction === 'row-reverse' ? (
                <>
                    <div className='part2' ref={continerRef}>
                        {isInViewcontiner &&
                            <motion.div className='continer' ref={continerRef}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                {titlePargraf ? <p id='titlePargraf'>{titlePargraf}</p> : null}
                                {title ? <h1>{title}</h1> : null}
                                {displayType === 'pargraph' ? (
                                    <>{description.map((item, index) => (<p key={index} className="description-paragraph">{item}</p>))}</>
                                ) : (
                                    <Unorderlist list={description}
                                    />
                                )}
                            </motion.div>
                        }
                        {childType === 'form' && children}
                        {text && isInViewcontiner ?
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}>
                                (<TextButton text={text} link={link} />)
                            </motion.div>
                            : (null)
                        }

                    </div>
                    <div className='part1' ref={imgRef}>
                        {isInView &&
                            < motion.img src={imgSrc} alt={imgAlt}
                                initial={InViewSlider ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        }
                        {childType !== 'form' && children}
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
                    <div className='part1' ref={imgRef}>
                        {isInView &&
                            < motion.img src={imgSrc} alt={imgAlt}
                                initial={InViewSlider ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className='bg-black'
                            />
                        }
                        {childType !== 'form' && children}
                        {forwardSection && backwardSection && (
                            <>
                                <Buttons forwardSection={forwardSection} backwardSection={backwardSection} />
                                <div className='flex gap-3 absolute -top-40px right-4'>
                                    <p id='titlePargraf'>Topinitiatieven</p><p className='font-semibold'> {activeSection}/{childrenCount} </p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='part2' ref={continerRef}>
                        {isInViewcontiner &&
                            <motion.div className='continer'
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
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
                            </motion.div>
                        }
                        {childType === 'form' && children}
                        {text && isInViewcontiner ?
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}>
                                (<TextButton text={text} link={link} />)
                            </motion.div>
                            : (null)
                        }

                    </div>

                </>
            )}
        </section>
    )
}
export default section2