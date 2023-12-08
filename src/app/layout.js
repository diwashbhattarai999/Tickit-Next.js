import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket Booking System",
  description: "You can book the ticket in a instant.",
  icons: {
    icon: "/public/assets/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
