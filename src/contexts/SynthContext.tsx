import { createContext, useState } from "react";
import { Instrument, InstrumentOptions } from "tone/build/esm/instrument/Instrument";
import providerProps from "./providerProps";

type synthContextType = {
    synth?: Instrument<InstrumentOptions>,
    setSynth?: (synth: Instrument<InstrumentOptions>) => void 
}

export const SynthContext = createContext<synthContextType>({
    synth: undefined
});

export function SynthContextsProvider({children}: providerProps) {
    const [synth, setSynth] = useState<Instrument<InstrumentOptions>>();

    return (
        <SynthContext.Provider value={{ synth, setSynth }}>
            {children}
        </SynthContext.Provider>
    )
}