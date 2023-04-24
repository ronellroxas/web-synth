import BasicContainerBox from "@/components/BasicContainerBox";
import { SettingsContext } from "@/contexts/SettingsContext";
import { SynthContext } from "@/contexts/SynthContext";
import toneUtils from "@/utils/toneUtils";
import { Stack, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import BaseKey from "./BaseKey";
import CONSTANTS from "./constants";
import { keyboardMap } from "./keyMapping";
import { keyProps } from "./keyProps";
import style from "./style.module.css";

export default function KeyboardComponent() {
    const theme = useTheme();
    const { synth } = useContext(SynthContext);
    const { octave } = useContext(SettingsContext);

    const keyPlayListener = (e: KeyboardEvent) => {
        if (!synth) return;

        console.log(e.key);
        const pressed = e.key.toUpperCase();

        if (Object.keys(keyboardMap).indexOf(pressed) >= 0) {
            const playKey = `${keyboardMap[pressed]}${octave}`
            toneUtils.play(synth!, playKey)
            e.preventDefault();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPlayListener);
    }, [synth]);


    const BlackKey = ({ order = 0, note }: keyProps) => {
        return <BaseKey
            order={order}
            bgcolor={theme.palette.secondary.main}
            className={style.note}
            note={note}
        />
    }

    const WhiteKey = ({ order = 0, note }: keyProps) => {
        return <BaseKey
            order={order}
            bgcolor={theme.palette.text.primary}
            height={CONSTANTS.KEY_SIZE * 2}
            className={style.note}
            note={note}
        />
    }

    return (
        <BasicContainerBox>
            <Stack direction="row" justifyContent="space-between" alignSelf="center">
                <WhiteKey order={1} note="C" />
                <BlackKey order={2} note="C#" />
                <WhiteKey order={3} note="D" />
                <BlackKey order={4} note="D#" />
                <WhiteKey order={5} note="E" />
                <WhiteKey order={6} note="F" />
                <BlackKey order={7} note="F#" />
                <WhiteKey order={8} note="G" />
                <BlackKey order={9} note="G#" />
                <WhiteKey order={10} note="A" />
                <BlackKey order={11} note="A#" />
                <WhiteKey order={12} note="B" />
            </Stack>

        </BasicContainerBox>
    )
}