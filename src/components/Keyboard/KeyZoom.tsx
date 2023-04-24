import { Zoom } from "@mui/material";
import CONSTANTS  from "./constants";

type keyZoomProps = {
    order?: number,
    children: JSX.Element
}

export default function KeyZoom({ order = 0, children }: keyZoomProps) {
    const delay = `${order * CONSTANTS.BASE_DELAY + 250}ms`;
    
    return <Zoom
        in={true}
        style={{ 
            transitionDelay: delay 
        }}
        
    >
        {children}
    </Zoom>
}