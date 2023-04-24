import { SettingsContextProvider } from "./SettingsContext";
import { SynthContextsProvider } from "./SynthContext";
import providerProps from "./providerProps";

export default function WebSynthContextProvider({ children }: providerProps) {

    return (
        <SynthContextsProvider>
            <SettingsContextProvider>
                {children}
            </SettingsContextProvider>
        </SynthContextsProvider>
    )
}