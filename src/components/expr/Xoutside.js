import React from "react";

function Xoutside(props, ref, { handler }) {
    useEffect(() => {
        // Bind the event listener
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                {
                    handler;
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside, true);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside, true);
            // document.removeEventListener("click", handleClickOutside, true);
        };
    }, [ref, handler]);

    return <div ref={ref}>{props.children}</div>;
}

const forwardedRef = React.forwardRef(Xoutside);
export default forwardedRef;
