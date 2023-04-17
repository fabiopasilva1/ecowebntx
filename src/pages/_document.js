import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="pt-Br">
      <Head />
      <body className="sidebar-mini layout-fixed layout-navbar-fixed">
        <Main />
        <NextScript />
        <script src="/plugins/jquery/jquery.min.js" async></script>
        <script
          src="/plugins/bootstrap/js/bootstrap.bundle.min.js"
          async
        ></script>
        <script src="dist/js/adminlte.js?v=3.2.0" async></script>
      </body>
    </Html>
  );
}
