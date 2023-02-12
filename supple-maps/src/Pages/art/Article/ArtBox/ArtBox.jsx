import React, { useState, useEffect } from 'react';

import classes from "./ArtBox.module.css";

import Block from '../../../../components/ui/Block/Block';
import Button from '../../../../components/ui/Button/Button';
import api_url from '../../../../config';

const ArtBox = ({art_id}) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch(api_url + "/art_images/" + art_id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            setImages(data.map((image, i) =>
                <img src={image} key={i + "_art_image"}></img>
            ));
        });
    }, [art_id]);

    return (
        <Block style={{padding: 0, gap: 0}}>
            <div className={classes.inline_search_wrap}>
                <input type="text" />
                <Button empty style={{padding: "var(--d1)"}}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 7.5002H11.25C9.18246 7.5002 7.49996 9.1827 7.49996 11.2502V16.2502C7.49996 18.3177 9.18246 20.0002 11.25 20.0002H16.25C18.3175 20.0002 20 18.3177 20 16.2502V11.2502C20 9.1827 18.3175 7.5002 16.25 7.5002ZM19.1666 16.2502C19.1666 17.8585 17.8583 19.1669 16.25 19.1669H11.25C9.64162 19.1669 8.33329 17.8585 8.33329 16.2502V11.2502C8.33329 9.64186 9.64162 8.33353 11.25 8.33353H16.25C17.8583 8.33353 19.1666 9.64186 19.1666 11.2502V16.2502ZM12.5 11.6669C12.5 12.1269 12.1266 12.5002 11.6666 12.5002C11.2066 12.5002 10.8333 12.1269 10.8333 11.6669C10.8333 11.2069 11.2066 10.8335 11.6666 10.8335C12.1266 10.8335 12.5 11.2069 12.5 11.6669ZM16.6666 15.8335C16.6666 16.2935 16.2933 16.6669 15.8333 16.6669C15.3733 16.6669 15 16.2935 15 15.8335C15 15.3735 15.3733 15.0002 15.8333 15.0002C16.2933 15.0002 16.6666 15.3735 16.6666 15.8335ZM7.49996 5.0002C7.03996 5.0002 6.66662 4.62686 6.66662 4.16686C6.66662 3.70686 7.03996 3.33353 7.49996 3.33353C7.95996 3.33353 8.33329 3.70686 8.33329 4.16686C8.33329 4.62686 7.95996 5.0002 7.49996 5.0002ZM4.16662 6.66686C4.62662 6.66686 4.99996 7.0402 4.99996 7.5002C4.99996 7.9602 4.62662 8.33353 4.16662 8.33353C3.70662 8.33353 3.33329 7.9602 3.33329 7.5002C3.33329 7.0402 3.70662 6.66686 4.16662 6.66686ZM5.76079 13.821C5.67996 13.9394 5.54996 14.0027 5.41662 14.0027C5.33579 14.0027 5.25329 13.9794 5.18162 13.9302C4.99079 13.7994 4.81079 13.6494 4.64579 13.4852L1.11079 9.94936C-0.351709 8.4877 -0.351709 6.10853 1.11079 4.64603L4.64579 1.11103C5.35412 0.401862 6.29662 0.0126953 7.29746 0.0126953C8.29829 0.0126953 9.24162 0.402695 9.94912 1.11103L13.4841 4.64603C13.6483 4.8102 13.7983 4.99103 13.9291 5.18186C14.0583 5.37186 14.0108 5.63103 13.82 5.76103C13.6325 5.88936 13.3725 5.8427 13.2408 5.65186C13.14 5.50353 13.0233 5.36353 12.895 5.2352L9.35996 1.7002C8.25829 0.598529 6.33662 0.597695 5.23496 1.7002L1.69996 5.2352C0.562458 6.3727 0.562458 8.2227 1.69996 9.3602L5.23496 12.8952C5.36329 13.0235 5.50329 13.1402 5.65162 13.241C5.84162 13.371 5.88996 13.631 5.75996 13.8202L5.76079 13.821Z" fill="#101727"/>
                    </svg>
                </Button>
            </div>

            <div className={classes.content}>
                {images}
            </div>

            <div className={classes.btns}>
                <Button rounded empty><h3>Поделиться</h3></Button>
                <Button rounded><h3>+ Добавить в маршрут</h3></Button>
            </div>
        </Block>
    );
};

export default ArtBox;