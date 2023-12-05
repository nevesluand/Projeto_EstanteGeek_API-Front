import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BooksHQs } from "./pages/BooksHQs";
import { BookHqProvider } from "./context/BooksHQsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BookHqProvider>
        <BooksHQs />
      </BookHqProvider>
    </ThemeProvider>
  )
}
