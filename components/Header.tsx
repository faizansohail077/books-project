import React from 'react'

const routes = [
    { id: 0, link: "Home", goto: "" },
    { id: 1, link: "Order", goto: "" },
    { id: 2, link: "Signup", goto: "" },
]

const Header = () => {
    return (
        <div className='mx-auto max-w-7xl p-3 md:p-0 ' >

            <div className='flex justify-end gap-5 my-5'  >

                {routes?.map((r) => {
                    return (
                        <p className='cursor-pointer pb-2 hover:border-b-2 border-black' key={r.id}>{r.link}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default Header