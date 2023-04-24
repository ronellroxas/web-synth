import { Box, Typography, useTheme } from "@mui/material";
import style from "./style.module.css";
import { SynthContext } from "@/contexts/SynthContext";
import { useContext } from 'react';

export default function WaveScreen() {
    const theme = useTheme();
    const { synth } = useContext(SynthContext);

    return (
        <Box
            borderRadius={5}
            sx={{
                position: 'relative',
                height: 0.5,
                minWidth: 1,
                backgroundColor: theme.palette.secondary.main,
                border: `2px solid ${theme.palette.secondary.light}`
            }}
        >
            <Box
                className={style.overlay}
                borderRadius={5}

                sx={{
                    overflow: "hidden",
                    width: 1,
                    height: 1,
                    background: `linear-gradient(${theme.palette.text.secondary}, ${theme.palette.text.secondary} 2px, transparent 2px, transparent 5px)`,
                    backgroundSize: "100% 6px",
                    opacity: 0.1,
                    animation: "pan-overlay 22s infinite linear",
                    "@keyframes pan-overlay": {
                        "0%": { backgroundPosition: "0% 0%" },
                        "100%": { backgroundPosition: "0% 100%" }
                    }
                }}
            >
            </Box>
            {synth ? null 
                    : 
                    <Typography
                        position='absolute'
                        color={theme.palette.text.disabled}
                        sx={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        Select a Synth to Start
                    </Typography>}
        </Box>
    )
}