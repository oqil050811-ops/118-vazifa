
import React from 'react'
import { Link } from 'react-router-dom'

function Mine() {
  const cards = [
    {
      name: 'Top 10 cnc pairs',
      profit: '120',
      price: '192',
      image: '/images/top10.png'
    },
    {
      name: 'Meme coins',
      profit: '376',
      price: '2.3K',
      image: '/images/meme.png'
    },
    {
      name: 'Margin trading x10',
      profit: '997',
      price: '11.2K',
      image: '/images/x10.png'
    }
  ]

  return (
    <div className="min-h-screen bg-[#292c32] text-white flex items-center justify-center px-1">

      <div className="relative w-full min-h-[430px] rounded-2xl border border-[#4b4d53] shadow-lg px-6 pt-20 pb-10">

        <Link
          to="/"
          className="absolute right-5 top-4 text-4xl"
        >
          ×
        </Link>

        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[#30343b] rounded-2xl mb-3 overflow-hidden"
          >
            <div className="flex items-center gap-5 p-3">

              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-12 object-contain"
              />

              <div className="text-[10px]">
                <p>{item.name}</p>

                <p className="text-gray-400 mt-2">
                  Profit per hour
                </p>

                <p>🪙 {item.profit}</p>
              </div>

            </div>

            <div className="border-t border-[#41444a] p-3 text-[11px]">
              lvl 1
              <span className="ml-5">
                🪙 {item.price}
              </span>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Mine
