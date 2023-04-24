import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { RotaryKnob } from "../RotaryKnob";
import WaveScreen from "./WaveScreen";

export default function EffectScreen() {
    const theme = useTheme();

    return (
        <Stack 
            direction="column" 
            spacing={2}
            sx={{ height: 1 }}
            justifyContent="space-between"
        >
            <WaveScreen />
            <Stack direction="row" justifyContent="space-evenly" gap={2}>
                <RotaryKnob order={1} title="Attack" />
                <RotaryKnob order={2} title="Delay" />
                <RotaryKnob order={3} title="Oscillator" />
            </Stack>
        </Stack >
    )
}