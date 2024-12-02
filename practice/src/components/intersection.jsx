import React, { useMemo, useRef } from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";

const IntersectionElement = () => {
    const ref = useRef(null);
    const options = useMemo(
        () => ({
            root: null,
            rootMargin: "0px",
            threshold: [0.25, 0.5, 0.6],
        }),
        []
    );
    options = {
        root: null,
        rootMargin: "0px",
        threshold:0.75
}
    const intersectionEntry = useIntersectionObserver(ref, options);
    console.log(intersectionEntry?.isIntersecting);
    return (
        <div style={{ height: "200vh" }}>
            <div
                ref={ref}
                className="content"
                style={{ height: "50vh", background: "lightBlue" }}
            >
                <div className="mt-10">Roadside coder</div>
            </div>
        </div>
    );
};

export default IntersectionElement;
