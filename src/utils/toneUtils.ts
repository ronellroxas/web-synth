import * as Tone from 'tone';
import { Instrument, InstrumentOptions } from 'tone/build/esm/instrument/Instrument';

export enum SupportedInstruments {
    SYNTH = 'Synth',
    AM_SYNTH = 'AMSynth',
    DUO_SYNTH = 'DuoSynth',
    FM_SYNTH = 'FMSynth',
    MEMBRANE_SYNTH = 'MembraneSynth',
    METAL_SYNTH = 'MetalSynth',
    MONO_SYNTH = 'MonoSynth',
    NOISE_SYNTH = 'NoiseSynth',
    PLUCK_SYNTH = 'PluckSynth',
    POLY_SYNTH = 'PolySynth',
}

const toneUtils = {
    setVolume: (volume: number) => {
        console.log(`set volume: ${volume}`)
        Tone.getDestination().volume.value = volume;
    },
    play: async (synth: Instrument<InstrumentOptions>, key: string) => {
        console.log(`play ${key}`);
        synth.triggerAttackRelease(key, '8n');

        if (Tone.context.state !== 'running') {
            Tone.start();
        }
    }
}

export default toneUtils;