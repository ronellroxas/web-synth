import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { AutocompleteRenderInputParams, InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function RenderElement(params: AutocompleteRenderInputParams) {
    const theme = useTheme();

    return (
        <TextField
            {...params}
            variant="standard"
            aria-label="selected synth"
            placeholder="Select your base synth"
            InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="start">
                        <GraphicEqIcon />
                    </InputAdornment>
                ),

            }}

            sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: "10px",
                p: 2,
                input: {
                    textAlign: 'center'
                }
            }}
            contentEditable={false}
        />
    );
}