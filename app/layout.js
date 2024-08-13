import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavigationRoute } from "./components/navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body>
        <NavigationRoute />
        {children}
      </body>
    </html>
  );
}
