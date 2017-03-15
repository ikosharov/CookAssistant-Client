'use strict';

import React from 'react';

const Base64Image = ({ data, width, height }) => {
    let imageSrc = 'http://placehold.it/200x200';

    if (data) {
        imageSrc = "data:image/png;base64," + data;
    }

    return (<img src={imageSrc} />);
}

export default Base64Image;