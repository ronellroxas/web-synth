import { Box, IconButton, Slide, Stack, Typography, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useContext, useEffect, useRef, useState } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";


export default function OctaveControl() {
    const {octave, setOctave} = useContext(SettingsContext);
    const ref = useRef<HTMLDivElement>();
    
    const [octaveChange, setOctaveChange] = useState<"" | "-">("");

    useEffect(() => {
        const element = ref.current

        if (!element) return;

        element.animate([
            { transform: `rotate(${octaveChange}360deg)` },
            { transform: `rotate(0deg)` },
        ], { duration: 250, iterations: 1 })

    }, [octave]);

    const addOctave = () => {
        setOctave(octave === 6 ? 0 : octave + 1);
        setOctaveChange("");
    }

    const minusOctave = () => {
        setOctave(octave === 0 ? 6 : octave - 1);
        setOctaveChange("-");
    }

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            columnGap={4}
        >
            <Typography>Octave</Typography>
            <IconButton
                aria-label="octave-down"
                size="large"
                onClick={minusOctave}
            >
                <KeyboardArrowLeftIcon />
            </IconButton>
            <Box
                ref={ref}
            >
                <Typography variant="h4">{octave}</Typography>
            </Box>
            <IconButton
                aria-label="octave-down"
                size="large"
                onClick={addOctave}
            >
                <KeyboardArrowRightIcon />
            </IconButton>
        </Stack>
    )
}