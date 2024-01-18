import { Sound } from "../redux/initialState";
import Tom1 from "../sounds/tom-808.wav";
import Tom2 from "../sounds/tom-acoustic01.wav";
import Tom3 from "../sounds/tom-acoustic02.wav";
import Tom4 from "../sounds/tom-analog.wav";
import Tom5 from "../sounds/tom-chiptune.wav";
import Tom6 from "../sounds/tom-fm.wav";
import Tom7 from "../sounds/tom-lofi.wav";
import Tom8 from "../sounds/tom-rototom.wav";
import Tom9 from "../sounds/tom-short.wav";
import Perc1 from "../sounds/perc-808.wav";
import Perc2 from "../sounds/perc-chirpy.wav";
import Perc3 from "../sounds/perc-hollow.wav";
import Perc4 from "../sounds/perc-laser.wav";
import Perc5 from "../sounds/perc-metal.wav";
import Perc6 from "../sounds/perc-nasty.wav";
import Perc7 from "../sounds/perc-short.wav";
import Perc8 from "../sounds/perc-tambo.wav";
import Perc9 from "../sounds/perc-tribal.wav";
import Clap1 from "../sounds/clap-808.wav";
import Clap2 from "../sounds/clap-analog.wav";
import Clap3 from "../sounds/clap-crushed.wav";
import Clap4 from "../sounds/clap-fat.wav";
import Clap5 from "../sounds/clap-slapper.wav";
import Clap6 from "../sounds/clap-tape.wav";
import Clap7 from "../sounds/crash-acoustic.wav";
import Clap8 from "../sounds/crash-tape.wav";
import Clap9 from "../sounds/crash-noise.wav";
import Openhat1 from "../sounds/openhat-808.wav";
import Openhat2 from "../sounds/openhat-acoustic.wav";
import Openhat3 from "../sounds/openhat-analog.wav";
import Openhat4 from "../sounds/openhat-slick.wav";
import Openhat5 from "../sounds/openhat-tight.wav";
import Openhat6 from "../sounds/kick-oldschool.wav";
import Openhat7 from "../sounds/kick-808.wav";
import Openhat8 from "../sounds/kick-acoustic01.wav";
import Openhat9 from "../sounds/kick-acoustic02.wav";
import Mixed1 from "../sounds/cowbell-808.wav";
import Mixed2 from "../sounds/hihat-electro.wav";
import Mixed3 from "../sounds/hihat-ring.wav";
import Mixed4 from "../sounds/hihat-digital.wav";
import Mixed5 from "../sounds/kick-floppy.wav";
import Mixed6 from "../sounds/kick-gritty.wav";
import Mixed7 from "../sounds/kick-heavy.wav";
import Mixed8 from "../sounds/snare-modular.wav";
import Mixed9 from "../sounds/snare-sumo.wav";

export const drumPadsDataFreeCode: Sound[] = [
  {
    id: "Heater-1",
    key: "Q",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyToCheck: "KEYQ",
  },
  {
    id: "Heater-2",
    key: "W",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyToCheck: "KEYW",
  },
  {
    id: "Heater-3",
    key: "E",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyToCheck: "KEYE",
  },
  {
    id: "Heater-4",
    key: "A",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyToCheck: "KEYA",
  },
  {
    id: "Clap",
    key: "S",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyToCheck: "KEYS",
  },
  {
    id: "Open-HH",
    key: "D",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyToCheck: "KEYD",
  },
  {
    id: "Kick-n'-Hat",
    key: "Z",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyToCheck: "KEYZ",
  },
  {
    id: "Kick",
    key: "X",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyToCheck: "KEYX",
  },
  {
    id: "Closed-HH",
    key: "C",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyToCheck: "KEYC",
  },
];

export const drumPadsDataTom: Sound[] = [
  {
    id: "Tom-808",
    key: "Q",
    audioSrc: `${Tom1}`,
    keyToCheck: "KEYQ",
  },
  {
    id: "Tom-acoustic01",
    key: "W",
    audioSrc: `${Tom2}`,
    keyToCheck: "KEYW",
  },
  {
    id: "Tom-acoustic02",
    key: "E",
    audioSrc: `${Tom3}`,
    keyToCheck: "KEYE",
  },
  {
    id: "Tom-analog",
    key: "A",
    audioSrc: `${Tom4}`,
    keyToCheck: "KEYA",
  },
  {
    id: "Tom-chiptune",
    key: "S",
    audioSrc: `${Tom5}`,
    keyToCheck: "KEYS",
  },
  {
    id: "Tom-fm",
    key: "D",
    audioSrc: `${Tom6}`,
    keyToCheck: "KEYD",
  },
  {
    id: "Tom-lofi",
    key: "Z",
    audioSrc: `${Tom7}`,
    keyToCheck: "KEYZ",
  },
  {
    id: "Tom-rototom",
    key: "X",
    audioSrc: `${Tom8}`,
    keyToCheck: "KEYX",
  },
  {
    id: "Tom-short",
    key: "C",
    audioSrc: `${Tom9}`,
    keyToCheck: "KEYC",
  },
];

export const drumPadsDataPerc: Sound[] = [
  {
    id: "Perc-808",
    key: "Q",
    audioSrc: `${Perc1}`,
    keyToCheck: "KEYQ",
  },
  {
    id: "Perc-chirpy",
    key: "W",
    audioSrc: `${Perc2}`,
    keyToCheck: "KEYW",
  },
  {
    id: "Perc-hollow",
    key: "E",
    audioSrc: `${Perc3}`,
    keyToCheck: "KEYE",
  },
  {
    id: "Perc-laser",
    key: "A",
    audioSrc: `${Perc4}`,
    keyToCheck: "KEYA",
  },
  {
    id: "Perc-metal",
    key: "S",
    audioSrc: `${Perc5}`,
    keyToCheck: "KEYS",
  },
  {
    id: "Perc-nasty",
    key: "D",
    audioSrc: `${Perc6}`,
    keyToCheck: "KEYD",
  },
  {
    id: "Perc-short",
    key: "Z",
    audioSrc: `${Perc7}`,
    keyToCheck: "KEYZ",
  },
  {
    id: "Perc-tambo",
    key: "X",
    audioSrc: `${Perc8}`,
    keyToCheck: "KEYX",
  },
  {
    id: "Perc-tribal",
    key: "C",
    audioSrc: `${Perc9}`,
    keyToCheck: "KEYC",
  },
];

export const drumPadsDataClap: Sound[] = [
  {
    id: "Clap-808",
    key: "Q",
    audioSrc: `${Clap1}`,
    keyToCheck: "KEYQ",
  },
  {
    id: "Clap-analog",
    key: "W",
    audioSrc: `${Clap2}`,
    keyToCheck: "KEYW",
  },
  {
    id: "Clap-crushed",
    key: "E",
    audioSrc: `${Clap3}`,
    keyToCheck: "KEYE",
  },
  {
    id: "Clap-fat",
    key: "A",
    audioSrc: `${Clap4}`,
    keyToCheck: "KEYA",
  },
  {
    id: "Clap-slapper",
    key: "S",
    audioSrc: `${Clap5}`,
    keyToCheck: "KEYS",
  },
  {
    id: "Clap-tape",
    key: "D",
    audioSrc: `${Clap6}`,
    keyToCheck: "KEYD",
  },
  {
    id: "Crash-acoustic",
    key: "Z",
    audioSrc: `${Clap7}`,
    keyToCheck: "KEYZ",
  },
  {
    id: "Crash-tape",
    key: "X",
    audioSrc: `${Clap8}`,
    keyToCheck: "KEYX",
  },
  {
    id: "Crash-noise",
    key: "C",
    audioSrc: `${Clap9}`,
    keyToCheck: "KEYC",
  },
];

export const drumPadsDataOpenhat: Sound[] = [
  {
    id: "Openhat-808",
    key: "Q",
    audioSrc: `${Openhat1}`,
    keyToCheck: "KEYQ",
  },
  {
    id: "Openhat-ac",
    key: "W",
    audioSrc: `${Openhat2}`,
    keyToCheck: "KEYW",
  },
  {
    id: "Openhat-analog",
    key: "E",
    audioSrc: `${Openhat3}`,
    keyToCheck: "KEYE",
  },
  {
    id: "Openhat-slick",
    key: "A",
    audioSrc: `${Openhat4}`,
    keyToCheck: "KEYA",
  },
  {
    id: "Openhat-tight",
    key: "S",
    audioSrc: `${Openhat5}`,
    keyToCheck: "KEYS",
  },
  {
    id: "Kick-oldschool",
    key: "D",
    audioSrc: `${Openhat6}`,
    keyToCheck: "KEYD",
  },
  {
    id: "Kick-808",
    key: "Z",
    audioSrc: `${Openhat7}`,
    keyToCheck: "KEYZ",
  },
  {
    id: "Kick-acoustic01",
    key: "X",
    audioSrc: `${Openhat8}`,
    keyToCheck: "KEYX",
  },
  {
    id: "Kick-acoustic02",
    key: "C",
    audioSrc: `${Openhat9}`,
    keyToCheck: "KEYC",
  },
];

export const drumPadsDataMixed: Sound[] = [
  {
    id: "Cowbell-808",
    key: "Q",
    audioSrc: `${Mixed1}`,
    keyToCheck: "KEYQ",
  },
  {
    id: "Hihat-electro",
    key: "W",
    audioSrc: `${Mixed2}`,
    keyToCheck: "KEYW",
  },
  {
    id: "Hihat-ring",
    key: "E",
    audioSrc: `${Mixed3}`,
    keyToCheck: "KEYE",
  },
  {
    id: "Hihat-digital",
    key: "A",
    audioSrc: `${Mixed4}`,
    keyToCheck: "KEYA",
  },
  {
    id: "Kick-floppy",
    key: "S",
    audioSrc: `${Mixed5}`,
    keyToCheck: "KEYS",
  },
  {
    id: "Kick-gritty",
    key: "D",
    audioSrc: `${Mixed6}`,
    keyToCheck: "KEYD",
  },
  {
    id: "Kick-heavy",
    key: "Z",
    audioSrc: `${Mixed7}`,
    keyToCheck: "KEYZ",
  },
  {
    id: "Snare-modular",
    key: "X",
    audioSrc: `${Mixed8}`,
    keyToCheck: "KEYX",
  },
  {
    id: "Snare-sumo",
    key: "C",
    audioSrc: `${Mixed9}`,
    keyToCheck: "KEYC",
  },
];
