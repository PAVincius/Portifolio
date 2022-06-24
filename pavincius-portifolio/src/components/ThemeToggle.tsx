import { MoonIcon,SunIcon  } from '@heroicons/react/solid'
import {useTheme} from "next-themes";
import * as React from 'react';


export default function ThemeChanger() {

    const {systemTheme , theme, setTheme} = useTheme ();

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className="w-5 h-5 text-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rotate-180 duration-300" role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="w-5 h-5 text-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" role="button" onClick={() => setTheme('dark')} />
      )
    }
 };