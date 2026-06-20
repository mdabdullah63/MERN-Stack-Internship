import React from 'react'
import useTheme from '../contexs/theme'

export default function Themebtn() {
    const { themeMode, darkTheme, lightTheme } = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.target.checked

        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={themeMode === "dark"}
                onChange={onChangeBtn}
            />

            <div
                className="relative w-11 h-6 bg-gray-200 rounded-full
                peer-focus:ring-4 peer-focus:ring-blue-300
                dark:bg-gray-700 dark:peer-focus:ring-blue-800
                peer-checked:bg-blue-600
                after:content-['']
                after:absolute
                after:top-0.5
                after:left-0.5
                after:bg-white
                after:border
                after:border-gray-300
                after:rounded-full
                after:h-5
                after:w-5
                after:transition-all
                peer-checked:after:translate-x-full
                peer-checked:after:border-white"
            />

            <span className="ml-3 text-sm font-medium text-gray-900">
                Toggle Theme
            </span>
        </label>
    )
}