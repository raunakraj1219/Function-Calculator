import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
    const [intersectionEntry, setIntersectionEntry] = useState(null);

    useEffect(() => {
        if (ref?.current && typeof IntersectionObserver === "function") {
            const handler = (entries) => {
                setIntersectionEntry(entries[0])
                console.log(entries);
            }
            const observer = new IntersectionObserver(handler, options)
            observer.observe(ref.current);
            return (() => {
                setIntersectionEntry(null) ;
                observer.disconnect();
            })
        }

    }, [ref, options])


    return intersectionEntry

}


const func = (ref, options) => {
    const [intEntry, setEntEntry] = useState(null);
    useEffect(() => {
        if (ref?.current) {
            const handler = (ent) => setEntEntry(entries[0]);
            const observer = new IntersectionObserver(handler, options);
            observer.observe(ref.current);
            return (() => { setEntEntry(null); observer.disconnect()})
        }
    },[ref,options])
}
export default useIntersectionObserver;