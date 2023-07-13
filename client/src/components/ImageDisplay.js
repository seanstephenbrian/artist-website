'use client'

import { useState } from 'react';
import { urlFor } from '../sanity';

import styles from '../styles/image-display.module.scss';

export default function ImageDisplay({ images }) {

    // set up state variable to track currently displayed photo:
    const [currentPhoto, setCurrentPhoto] = useState(0);

    // functions to decrement/increment the current photo...
    function goBack() {
        // if you go back when viewing the first photo,
        // the display advances to the final photo:
        if (currentPhoto === 0) {
            setCurrentPhoto(images.length - 1);
        } else {
            setCurrentPhoto((currentPhoto) => {
                return currentPhoto - 1;
            });
        }
    }

    function goForward() {
        // if you go forward when viewing the final photo,
        // the display returns to the first photo:
        if (currentPhoto === images.length - 1) {
            setCurrentPhoto(0);
        } else {
            setCurrentPhoto((currentPhoto) => {
                return currentPhoto + 1;
            });
        }
    }

    return (
        <div className={styles.imageDisplay}>
            <div>
                {images.map((image, index) => {
                    // only display the image whose index matches
                    // the currently displayed photo:
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