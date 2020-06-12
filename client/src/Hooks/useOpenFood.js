import { useState } from "react";

 export function useOpenfood() {
    const [openFood, setOpenfood] = useState();
    return {
        openFood,
        setOpenfood
    };
}
