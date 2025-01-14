'use client'
import { useEffect } from "react"

export default function Front() {
    useEffect(() => {
        fetch('/api', { method: "POST" })
    })
    return (<h1>Some content</h1>)
}