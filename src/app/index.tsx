import type { Component } from "solid-js";
import { ThemeProvider, themeStore } from "./providers";
import "./styles/index.scss";

export const App: Component = () => {
  return (
    <ThemeProvider>

      <div class="app">
 
        <div>
          <h2>choose theme:</h2>
          <button onClick={ () => themeStore.setTheme("system")}>system</button>
          <button onClick={ () => themeStore.setTheme("light")}>light</button>
          <button onClick={ () => themeStore.setTheme("dark")}>dark</button>
        </div>

        <hr />

        <details>
          <h3>advanced settings</h3>
          <div>
            <h4>setup default light theme:</h4>
            <button onClick={ () => themeStore.setLight("light")}>light</button>
            <button onClick={ () => themeStore.setLight("day")}>day</button>
          </div>
          <div>
            <h4>setup default dark theme:</h4>
            <button onClick={ () => themeStore.setDark("dark")}>dark</button>
            <button onClick={ () => themeStore.setDark("night")}>night</button>
          </div>
        </details>

      </div>

    </ThemeProvider>
  );
};
