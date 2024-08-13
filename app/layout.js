import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavigationRoute } from "./components/navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      </head>
      <body>
        <NavigationRoute />
        {children}
      </body>
    </html>
  );
}
