import React from 'react';
import {useParams} from "react-router-dom";

function ProductDetails(props) {
    const {id} = useParams();
    return (
        <div>je suis la description</div>
    );
}

export default ProductDetails;