import AudioSettings from '@/components/AudioSettings/AudioSettings';
import BasicContainerBox from '@/components/BasicContainerBox';
import EffectScreen from '@/components/EffectScreen';
import { KeyboardComponent } from '@/components/Keyboard';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid container
      spacing={2}
      my={4}
      height={1}
    >
      <Grid item xs={12} md={3}>
        <Stack direction="column" height={1} justifyContent="space-between" rowGap={2}>
          <BasicContainerBox height={1}>
            <Typography>Nav</Typography>
          </BasicContainerBox>
          <AudioSettings />
        </Stack>
      </Grid>
      <Grid item xs={12} md={9}>
        <BasicContainerBox height={1}>
          <EffectScreen />
        </BasicContainerBox>
      </Grid>
      <Grid item xs={12}>
        <KeyboardComponent />
      </Grid>
    </Grid>
  )
}
