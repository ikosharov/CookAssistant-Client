'use strict';

import React from 'react';

const Base64Image = ({data, width, height}) => {
    // let w = width || '100px';
    // let h = height || '100px';
    let imageSrc = 'http://placehold.it/100x100';

    if(data) {
        imageSrc = "data:image/png;base64," + data;
    }

    // let markup = (<img src={imageSrc} width={w} height={h} />);
    let markup = (<img src={imageSrc} />);

    return markup;
}   

export default Base64Image;