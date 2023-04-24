import { SynthContext } from "@/contexts/SynthContext";
import createInstrument from "@/instruments/InstrumentFactory";
import { SupportedInstruments } from "@/utils/toneUtils";
import { Popper, Slide } from "@mui/material";
import Autocomplete, { AutocompleteChangeReason } from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import RenderElement from "./RenderElement";
import SynthPopper from "./SynthPopper";

export default function SynthSelector() {
    const theme = useTheme();
    const [value, setValue] = useState<SupportedInstruments>();
    const { setSynth } = useContext(SynthContext);

    useEffect(() => {
        if (setSynth) setSynth(createInstrument(value)!);
    }, [setSynth])

    const handleChange = (_: any, value: SupportedInstruments | null, reason: AutocompleteChangeReason) => {
        if (value === null) return;

        const instrument = createInstrument(value);

        if (setSynth) {
            setSynth(instrument!);
            setValue(value);
        } else {
            // TODO: HANDLE ERROR
        }
    }

    return (
        <Slide
            in={true}
            easing={{
                enter: theme.transitions.easing.easeIn
            }}
        >
            <Autocomplete
                options={Object.values(SupportedInstruments)}
                renderInput={RenderElement}
                value={value}
                onChange={handleChange}
                PopperComponent={SynthPopper}
                fullWidth
            />
        </Slide>
    )
}