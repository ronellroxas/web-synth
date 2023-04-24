import { SupportedInstruments } from "@/utils/toneUtils";
import * as Tone from "tone";
import { Instrument, InstrumentOptions } from "tone/build/esm/instrument/Instrument";

export default function createInstrument(instrument: SupportedInstruments | undefined): Instrument<InstrumentOptions> | null {
    switch(instrument) {
        case SupportedInstruments.AM_SYNTH: return new Tone.AMSynth().toDestination();
        case SupportedInstruments.DUO_SYNTH: return new Tone.DuoSynth().toDestination();
        case SupportedInstruments.FM_SYNTH: return new Tone.FMSynth().toDestination();
        case SupportedInstruments.MEMBRANE_SYNTH: return new Tone.MembraneSynth().toDestination();
        case SupportedInstruments.METAL_SYNTH: return new Tone.MetalSynth().toDestination();
        case SupportedInstruments.MONO_SYNTH: return new Tone.MonoSynth().toDestination();
        case SupportedInstruments.NOISE_SYNTH: return new Tone.NoiseSynth().toDestination();
        case SupportedInstruments.PLUCK_SYNTH: return new Tone.PluckSynth().toDestination();
        case SupportedInstruments.POLY_SYNTH: return new Tone.PolySynth().toDestination();
        case SupportedInstruments.SYNTH: return new Tone.Synth().toDestination();
        default: return null;
    }
}