"use client"

import {FormEvent, useState} from "react";


export default function HomePage() {
    const [nameList, setNameList] = useState<string[]>([])
    const [nameInput, setNameInput] = useState("")
    const [showList, setShowList] = useState(true)
    const [showDialog, setShowDialog] = useState(true)

    const addName = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (nameInput == "") {
            return
        }

        const name = nameInput.trim()
        setNameList((currentNames) => [...currentNames, name])
        setNameInput("")
    }

    const delteName = (indexdelte: number) => {
        setNameList((currentNames) => currentNames.filter((_, index) => index !== indexdelte))
    }

    return (
        <div className="flex flex-col items-center justify-start gap-4">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-br from-blue-400 to-violet-800 hover:to-red-400 transition-colors duration-700">Random Generator</h1>
            <div>
                <p>Enter the names to the list</p>
                <div className="flex gap-2">
                    <form className="flex gap-2" onSubmit={addName}>
                        <div>
                            <div className="focus-within:p-1 p-0.5 bg-black rounded-2xl focus-within:bg-linear-to-br focus-within:from-blue-400 focus-within:to-violet-800 transition-colors duration-500">
                                <input value={nameInput} type="text" className="rounded-2xl px-5 py-3 text-lg bg-white outline-none " placeholder="Name" onChange={(e) => setNameInput(e.target.value)}/>
                            </div>
                            <p className="flex">You have added {<p className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-br from-blue-400 to-violet-800 px-2 transition-all">{nameList.length}</p>} names</p>
                        </div>
                        <button type="submit" className="rounded-2xl px-5 py-3 text-lg cursor-pointer transition-colors bg-linear-to-br from-blue-400 to-violet-600 hover:to-violet-400 duration-500">Add to list</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {showList ? (
                    <div>
                        { nameList.map((currentName, index) => (
                        <div key={index}>
                            <button onClick={() => delteName(index)} className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-br from-blue-400 to-violet-800 hover:to-red-900 hover:from-red-500 transition-colors duration-300 cursor-pointer" key={index}>{currentName}</button>
                        </div>
                        ))}
                        <button className="cursor-pointer" onClick={() => setShowList(false)}>Hide list</button>
                    </div>
                    )
                 : (
                    <button className="cursor-pointer" onClick={() => setShowList(true)}>See list</button>
                )}

            </div>
            <button disabled={nameList.length == 0} aria-disabled={nameList.length == 0} type="submit" className="aria-disabled:cursor-not-allowed aria-disabled:grayscale-100 rounded-2xl px-8 py-5 text-3xl cursor-pointer transition-colors bg-linear-to-br from-blue-400 to-violet-600 hover:to-violet-400 duration-500">Start!</button>

            <div className="fixed inset-0 rounded-2xl flex backdrop-blur-2xl w-full h-screen items-center justify-center">
                <div className="bg-gray-500 min-w-70 min-h-100 max-w-200" onClick={(e) => e.stopPropagation()}>

                </div>
            </div>
        </div>
    )
}