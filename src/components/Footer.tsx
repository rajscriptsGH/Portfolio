"use client"
import { useEffect, useState } from "react"

const Footer = () => {
    const [quote, setQuote] = useState<string>("")

    const gitaQuotes: string[] = [
        "You have the right to work, but never to the fruit of work. — BG 2.47",
        "Change is the law of the universe. You can be a millionaire, or a pauper in an instant. — BG 2.14",
        "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. — BG 6.5",
        "Perform your duty without attachment, for action performed without desire brings the supreme. — BG 3.19",
        "For one who has conquered the mind, the mind is the best friend; but for one who has failed, it is the worst enemy. — BG 6.6",
        "The soul is neither born, and nor does it die. — BG 2.20",
        "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good. — BG 4.18",
    ]

    useEffect(() => {
        const now = new Date()
        const startOfYear = new Date(now.getFullYear(), 0, 0)
        const diff = now.getTime() - startOfYear.getTime()
        const oneDay = 1000 * 60 * 60 * 24
        const dayOfYear = Math.floor(diff / oneDay)

        setQuote(gitaQuotes[dayOfYear % gitaQuotes.length])
    }, [])

    return (
        <footer className="w-full py-6 mt-10 border-t border-gray-700 bg-gray-900 text-gray-300">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
                {quote && (
                    <p className="italic text-center text-gray-400">“{quote}”</p>
                )}
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} rajscripts. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
