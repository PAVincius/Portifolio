import { ThemeProvider } from "next-themes";
import * as React from 'react';

import Header from './Header';


export default function Layout({ children }: { children: React.ReactNode }) {

  return(
    <ThemeProvider enableSystem={true} attribute="class">
      <>
        <Header/>
        <main>{children}</main> 
      </>
    </ThemeProvider>
    
  ) 
}
