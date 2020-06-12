import { useState } from "react";

export function useKitchen() {
    const [kitchen, setKitchen] = useState();
    return {
        kitchen,
        setKitchen
    };
}
