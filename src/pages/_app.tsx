import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { api } from "@/lib/api";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <main
        className={
          "flex min-h-screen flex-col bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50"}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
