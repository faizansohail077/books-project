"use client"
import React, { useState } from 'react'

interface IPROP {
    customerName: string,
    bookId: string | number
}

const createOrder = async (data: IPROP) => {
    const res = await fetch('https://simple-books-api.glitch.me/orders', {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors',
        headers: {
            Authorization: `Bearer 071747a377e48e2cd0f61f50a2a271bc0f1c1ed7ba677d06b1cb55f1d3bf722b`
        }
    })
    return res
}

const Order = () => {
    const [name, setName] = useState("")
    const [bookId, setBookId] = useState('')

    const postData = async () => {
        try {
            const data = await createOrder({ customerName: name, bookId: Number(bookId) })
            console.log(data, 'data')
        } catch (error) {
            console.log(error, 'error')
        }
    }


    return (
        <div className='mx-auto max-w-7xl' >
            <div className='flex flex-col items-center justify-center' >
                <h1 className='text-2xl font-bold border-b border-black pb-2' >Create New Order</h1>

                <div className='flex flex-col gap-5 mt-5 w-[90%] md:w-[70%]' >
                    <input value={name} onChange={(e) => setName(e.target.value)} className='p-3 border border-[#EAEAEA] outline-none' placeholder='Enter Name' />
                    <input value={bookId} type={"number"} onChange={(e) => setBookId(e.target.value)} className='p-3 border border-[#EAEAEA] outline-none' placeholder='Enter BookId' />
                    <button onClick={postData} className='bg-black duration-1000 text-white p-3' >Order</button>
                </div>

            </div>
        </div>
    )
}

export default Order