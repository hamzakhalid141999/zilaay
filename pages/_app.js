import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";
import { AuthProvider } from "../contextApi";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <AuthProvider>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
