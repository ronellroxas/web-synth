import { Stack } from "@mui/material";
import BasicContainerBox from "../BasicContainerBox";
import OctaveControl from "./OctaveControl";
import VolumeControl from "./VolumeControl";

export default function AudioSettings() {
    return (
        <BasicContainerBox>
            <Stack direction="column" spacing={4}>
                <VolumeControl />
                <OctaveControl />
            </Stack>
        </BasicContainerBox>
    )
}
