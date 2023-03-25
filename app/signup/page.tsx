"use client"
import React, { useState } from 'react'

interface IPROP {
    clientName: string,
    clientEmail: string
}

const createAccount = async (data: any) => {
    const res = await fetch('https://simple-books-api.glitch.me/api-clients', {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors'
    })
    return res.json()
}

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const postData = async () => {
        try {
            const data = await createAccount({ clientName: name, clientEmail: email })
            console.log(data, 'data')
        } catch (error) {
            console.log(error, 'error')
        }
    }


    return (
        <div className='mx-auto max-w-7xl' >
            <div className='flex flex-col items-center justify-center' >
                <h1 className='text-2xl font-bold border-b border-black pb-2' >Signup For Placing Order</h1>

                <div className='flex flex-col gap-5 mt-5 w-[90%] md:w-[70%]' >
                    <input value={name} onChange={(e) => setName(e.target.value)} className='p-3 border border-[#EAEAEA] outline-none' placeholder='Enter Name' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 border border-[#EAEAEA] outline-none' placeholder='Enter Email' />
                    <button onClick={postData} className='bg-black duration-1000 text-white p-3' >Signup</button>
                </div>

            </div>
        </div>
    )
}

export default Signup