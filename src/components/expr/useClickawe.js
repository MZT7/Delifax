import { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */

function useClickawe(initial) {
    const [show, setShow] = useState(initial);
    const ref = useRef(null);

    useEffect(() => {
        // Bind the event listener
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    }, []);

    return { ref, show, setShow };
}

export default useClickawe;
