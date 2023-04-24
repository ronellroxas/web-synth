import { SettingsContext } from "@/contexts/SettingsContext";
import toneUtils from "@/utils/toneUtils";
import { Slider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function VolumeControl() {
    const [ volume, setVolume ] = useState(-5);

    const handleVolumeChange = (e: Event, newVolume: number | number[]) => {
        setVolume(newVolume as number);
        toneUtils.setVolume(newVolume as number);
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            rowGap={4}
        >
            <Typography>Volume</Typography>
            <Slider
                step={1}
                min={-20}
                max={0}
                value={volume}
                aria-label="Volume"
                onChange={handleVolumeChange}
            />
        </Stack>
    )
}