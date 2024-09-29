"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi";


export default function Changer() {
    const [mounted, SetMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? 'systemTheme' : theme;

    useEffect(() => SetMounted(true), [])

    return (
        <div className="">
            {mounted && (theme === "dark") ?
                (<FiSun onClick={() => setTheme('light')} />) :
                (<FiMoon onClick={() => setTheme('dark')} />)}

        </div>
    )
}
