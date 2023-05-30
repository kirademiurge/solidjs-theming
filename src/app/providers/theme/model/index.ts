import { createStore } from "solid-js/store";
import { DarkTheme, LightTheme, SystemTheme, Theme } from "../api";

export interface ThemeStore {
	light: LightTheme,
	dark: DarkTheme,
	system: SystemTheme,
	theme: Theme,

	setLight: (theme: LightTheme) => void,
	setDark: (theme: DarkTheme) => void,
	setTheme: (theme: Theme) => void,
}

export const [themeStore, setThemeStore] = createStore<ThemeStore>({
	light: getLight(),
	dark: getDark(),
	system: getSystem(),
	theme: getTheme(),

	setLight: (theme) => {
		setThemeStore("light", () => theme);
		localStorage.setItem("lightTheme", theme);
	},

	setDark: (theme) => {
		setThemeStore("dark", () => theme);
		localStorage.setItem("darkTheme", theme);
	},

	setTheme: (theme) => {
		setThemeStore("theme", () => theme);
		localStorage.setItem("theme", theme);
	},
});





function getLight (): LightTheme {
	const lightTheme: LightTheme | any = localStorage.getItem("lightTheme");
	if (lightTheme) return lightTheme;
	else return "light";
};

function getDark (): DarkTheme | any {
	const darkTheme: DarkTheme | any = localStorage.getItem("darkTheme");
	if (darkTheme) return darkTheme;
	else return "dark";
};

function getSystem (): SystemTheme | any {
	if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
	else return "dark";
};

function getTheme (): Theme | any {
	const theme: Theme | any = localStorage.getItem("theme");
	if (theme) return theme;
	else return "system";
};
