'use client'

import { useChangeLocale, useCurrentLocale } from "@/locales/client"

const SelectLang = () => {
    const currentLocale = useCurrentLocale()
    const changeLocale = useChangeLocale()
    return (
        <select
        className="text-white p-1 border border-purple rounded-xl bg-primary"
        value={currentLocale}
        onChange={(e) =>  changeLocale(e.target.value as "fr" | "en")}
        >
            <option value={'fr'} >fr</option>
            <option value={'en'} >en</option>
        </select>
    )
}

export default SelectLang
