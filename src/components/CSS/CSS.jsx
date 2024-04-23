import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./CSS.css";
export const CSS = ()=> {
     
    return(
        <>
        <div className="css__parent">
            <div className="css__child child1">1</div>
            <div className="css__child child2">2</div>
            <div className="css__child child3">3</div>
        </div>
        <div className="def">
            <div><span>Static:</span> it wont allow us to use top, bottom, left, right properties. It keeps element in document flow.</div>
            <div><span>Relative:</span> it allow us to use top, bottom, left, right properties. It reserves the space and takes element out of document flow.</div>
            <div><span>Absolute:</span> it allow us to use top, bottom, left, right properties. It wont reserves the space and takes element out of document flow. It align the element to its body tag or nearest non-static element </div>
            <div><span>Fixed:</span> it allow us to use top, bottom, left, right properties. It wont reserves the space and takes element out of document flow. It align the element to its body tag. It wont hide when we scroll. Similar to Abolute, but it wont hide when we scroll. </div>
            <div><span>Sticky:</span>similar to Absolute, but it become fixed when element reach top of the page when we scroll.
            </div>
            <div><span>Static:</span> it wont allow us to use top, bottom, left, right properties. It keeps element in document flow.</div>
            <div><span>Relative:</span> it allow us to use top, bottom, left, right properties. It reserves the space and takes element out of document flow.</div>
            <div><span>Absolute:</span> it allow us to use top, bottom, left, right properties. It wont reserves the space and takes element out of document flow. It align the element to its body tag or nearest non-static element </div>
            <div><span>Fixed:</span> it allow us to use top, bottom, left, right properties. It wont reserves the space and takes element out of document flow. It align the element to its body tag. It wont hide when we scroll. Similar to Abolute, but it wont hide when we scroll. </div>
            <div><span>Sticky:</span>similar to Absolute, but it become fixed when element reach top of the page when we scroll.
            </div>
        </div>
        </>
    )
}
export default CSS;