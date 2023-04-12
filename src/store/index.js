import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#c4c4c4',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './IMALR.jpeg',
    fullDecal: './IMALR.jpeg',
});

export default state;