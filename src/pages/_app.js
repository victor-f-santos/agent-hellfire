import "@/styles/globals.css";
import Layout from "@/Components/Layout";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}
