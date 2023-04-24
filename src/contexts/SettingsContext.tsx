import { createContext, useEffect, useState } from "react";
import providerProps from "./providerProps";
import toneUtils from "@/utils/toneUtils";

export const SettingsContext = createContext({
    octave: 3,
    setOctave: (octave: number) => {}
});

export function SettingsContextProvider({ children }: providerProps) {
    const [octave, setOctave] = useState(3);

    return (
        <SettingsContext.Provider value={{ octave, setOctave }}>
            {children}
        </SettingsContext.Provider>
    )
}