import { JSX, createEffect } from "solid-js";
import { themeStore } from "../model";

export interface ThemeProviderProps {
	children: JSX.Element,
}

export const ThemeProvider = (props: ThemeProviderProps) => {
	createEffect( () => {
		updateView();
	} );

	return (
		<>
			{props.children}
		</>
	)
}





function updateView () {
	if (themeStore.theme === "light") document.documentElement.dataset.theme = themeStore.light;
	if (themeStore.theme === "dark") document.documentElement.dataset.theme = themeStore.dark;
	if (themeStore.theme === "system") {
		if (themeStore.system === "light") document.documentElement.dataset.theme = themeStore.light;
		if (themeStore.system === "dark") document.documentElement.dataset.theme = themeStore.dark;
	}
};