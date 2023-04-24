import { Collapse, Stack, Typography, Zoom, useTheme } from "@mui/material";
import { Knob, Pointer } from "rc-knob";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

type rotaryKnobProps = {
    order?: number,
    title: string,
}

export default function RotaryKnob({order = 0, title}: rotaryKnobProps) {
    const theme = useTheme();
    
    const [displayTitle, setDisplayTitle] = useState(false);

    return (
        <Zoom
            in={true}
            style={{ 
                transitionDelay: `${order*250}ms`, 
                transitionDuration: "500ms"
            }}

            onAnimationEndCapture={() => setDisplayTitle(true)}
        >
            <Stack 
                direction="column"
                alignItems="center"
                sx={{
                    animation: "spin 500ms ease-out 1",
                    animationDelay: `${order*250}ms`,
                    "@keyframes spin": {
                        "0%": {
                            transform: "rotate(180deg)",
                        },
                        "100%": {
                            transform: "rotate(0deg)",
                        }
                    }
                }}
            >
                <Knob
                    size={100}
                    angleOffset={220}
                    angleRange={280}
                    min={0}
                    max={100}
                >
                    <circle
                        className={`pointer-${order}`}
                        r="35"
                        cx="50"
                        cy="50"
                        fill={theme.palette.background.default}
                        stroke={theme.palette.secondary.main}
                        strokeWidth={2}
                    />
                    <Pointer
                        width={5}
                        radius={30}
                        type="circle"
                        color={theme.palette.text.primary}
                        className={styles.pointer}
                    />
                </Knob>
                <Typography
                    sx={{
                        opacity: displayTitle ? 1 : 0
                    }}
                >{title}</Typography>
            </Stack>
        </Zoom>
    )
}