import { useState } from 'react'

export const Clock = () => {
    const currentTime = () => {
        let date = new Date()
        let hh:number|string = date.getHours()
        let mm:number|string = date.getMinutes()
        let ss:number|string = date.getSeconds()
        let session = "AM"

        if(hh === 0) hh = 12
        if(hh > 12) {
            hh = hh - 12
            session = "PM"
        }

        hh = hh < 10 ? "0" + hh : hh
        mm = mm < 10 ? "0" + mm : mm
        ss = ss < 10 ? "0" + ss : ss

        return `${hh}:${mm}:${ss} ${session}`
    }

    const [clock, setClock] = useState(currentTime())

    setInterval(() => {
        setClock(currentTime())
    }, 1000)

    return (
        <div className="text-sm">{ clock }</div>
    )
}