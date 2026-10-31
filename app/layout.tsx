import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Uchoq — Erkin va zamonaviy messenjer",description:"Uchoq — Android uchun zamonaviy va mustaqil messenjer.",icons:{icon:"/uchoq-icon.svg",shortcut:"/uchoq-icon.svg",apple:"/uchoq-icon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uz"><body>{children}</body></html>}