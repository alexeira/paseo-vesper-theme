import type { PluginClientContext } from "@getpaseo/plugin/client";
import { vesperDark } from "./client/themes/vesper-dark";
import { vesperLight } from "./client/themes/vesper-light";
import { vesperLightMono } from "./client/themes/vesper-light-mono";

const themes = [vesperDark, vesperLight, vesperLightMono];

export default function contribute(client: PluginClientContext) {
  const removeThemes = themes.map((theme) => client.addTheme(theme));
  return () => removeThemes.forEach((removeTheme) => removeTheme());
}
