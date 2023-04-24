import { SettingsContext } from "@/contexts/SettingsContext";
import { SynthContext } from "@/contexts/SynthContext";
import toneUtils from "@/utils/toneUtils";
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import KeyZoom from "./KeyZoom";
import CONSTANTS from "./constants";
import { keyProps } from "./keyProps";

export default function BaseKey({ order = 0, bgcolor, height = CONSTANTS.KEY_SIZE, className, note }: keyProps) {
    const { octave } = useContext(SettingsContext);
    const { synth } = useContext(SynthContext);

    const handleOnClick = (e: React.SyntheticEvent) => {
        if (!synth) return;

        e.preventDefault();
        toneUtils.play(synth!, `${note}${octave}`);
    }

    return <KeyZoom order={order}>
        <IconButton
            onClick={handleOnClick}
            sx={{
                color: bgcolor
            }}
        >
            <CircleIcon />
        </IconButton>
    </KeyZoom>
}