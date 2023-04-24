import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

type basicBoxProps = {
    minHeight?: number | string,
    height?: number | string,
    children: JSX.Element
}

export default function BasicContainerBox({minHeight = "auto", height = "auto", children}: basicBoxProps) {
    const theme = useTheme();
    
    return (
        <Box
            sx={{
                height: height,
                minHeight: minHeight,
                p: "2rem",
                border: 1,
                borderColor: theme.palette.action.disabledBackground,
                borderRadius: "10px"
            }}
        >
            {children}
        </Box>
    )
}