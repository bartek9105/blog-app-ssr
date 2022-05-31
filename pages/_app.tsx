import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
        />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
