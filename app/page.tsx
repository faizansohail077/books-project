interface IData {
  id: string,
  name: string,
  type: string,
  available: boolean
}


const getBooks = async () => {
  const res = await fetch('https://simple-books-api.glitch.me/books')
  return res.json()
}

const capitalWord = (value: string) => {
  let capital = value.charAt(0).toUpperCase() + value.substring(1)
  return capital
}

export default async function Home() {
  const data: IData[] = await getBooks()
  return (
    <div className="mx-auto max-w-7xl my-10 p-3 lg:p-0" >
      <h1 className="py-5 text-2xl font-bold" >Dynamic Books:</h1>
      {data?.map((d) => {
        return (
          <div key={d.id} className="cursor-pointer hover:animate-pulse p-3 border border-[#EAEAEA] flex flex-col gap-3 mt-2 shadow-md" >

            <div className="flex items-center gap-5" >
              <p>
                Name:
              </p>
              <p className="font-bold" >
                {d.name}
              </p>
            </div>

            <div className="flex items-center gap-5" >

              <p >
                Type:
              </p>
              <p className="font-bold">
                {capitalWord(d.type)}
              </p>
            </div>

            <div className="flex items-center gap-5" >
              <p className="" >
                Available:
              </p>
              <p className="font-bold">
                {d.available ? 'True' : 'False'}
              </p>
            </div>
          </div>
        )
      })}
    </div>

  )
}
