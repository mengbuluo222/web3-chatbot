// 'use client' // 必须声明为客户端组件
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from '@web3-react/core'
// import { metaMask } from '@/connectors/metaMask'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <Web3Provider connectors={[metaMask]}>
    //   <html>{children}</html>
    // </Web3Provider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
