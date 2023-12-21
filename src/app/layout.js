'use client'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-fixed bg-gradient-to-r from-green-400 to-blue-400'>
        <NextThemesProvider attribute="class">
          <div className='grid-cols-12 gap-6 lg:px-52 lg:grid my-14 sm:px-20 md:px-32 dark:bg-[#0d0f11]'>
            <aside className='col-span-3 p-4 mb-10 md:mb-0 lg:mb-0 xl:mb-0 bg-white rounded-2xl dark:bg-black'>
              <Sidebar></Sidebar>
            </aside>
            <div className='flex flex-col col-span-9 bg-white rounded-2xl dark:bg-black'>
              <Navbar></Navbar>
              {children}
            </div>
          </div>
        </NextThemesProvider>
      </body>
    </html>
  )
}

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }