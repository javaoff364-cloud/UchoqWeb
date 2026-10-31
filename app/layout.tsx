import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Uchoq — Erkin va zamonaviy messenjer",description:"Uchoq — Android uchun zamonaviy va mustaqil messenjer."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}