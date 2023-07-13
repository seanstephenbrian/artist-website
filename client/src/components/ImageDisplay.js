'use client'

import { useState } from 'react';
import { urlFor } from '../sanity';

import styles from '../styles/image-display.module.scss';

export default function ImageDisplay({ images }) {

    const [currentPhoto, setCurrentPhoto] = useState(0);

    function goBack() {
        if (currentPhoto === 0) {
            setCurrentPhoto(images.length - 1);
        } else {
            setCurrentPhoto((currentPhoto) => {
                return currentPhoto - 1;
            });
        }
    }

    function goForward() {
        if (currentPhoto === images.length - 1) {
            setCurrentPhoto(0);
        } else {
            setCurrentPhoto((currentPhoto) => {
                return currentPhoto + 1;
            });
        }
    }

    return (
        <div>
            <div>
                {images.map((image, index) => {
                    if (index === currentPhoto) {
                        return (
                            <img
                                src={urlFor(image).width(300).url()}
                                alt=''
                                key={'image-' + index}
                            />
                        )
                    }
                })}
            </div>
            <div className={styles.projectNavigation}>
                <div onClick={goBack}>previous</div>
                <div onClick={goForward}>next</div>
            </div>
        </div>   
    )
}