
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [coins, setCoins] = useState(507981)

  const tapHamster = () => {
    setCoins(prev => prev + 12)
  }

  return (
    <div className="min-h-screen bg-[#292c32] text-white p-5">

      <h3 className="text-center">Hamster Kombat</h3>

      <div className="flex justify-between gap-2 mt-12">

        <div className="bg-[#30343b] rounded-xl p-3 flex-1 text-center text-xs">
          <p className="text-orange-400">Earn per tap</p>
          🪙 +12
        </div>

        <div className="bg-[#30343b] rounded-xl p-3 flex-1 text-center text-xs">
          <p className="text-blue-400">Coins to level up</p>
          10 M
        </div>

        <div className="bg-[#30343b] rounded-xl p-3 flex-1 text-center text-xs">
          <p className="text-green-400">Profit per hour</p>
          🪙 +636
        </div>

      </div>

      <h1 className="text-center text-4xl font-bold mt-8">
        🪙 {coins.toLocaleString('en-US')}
      </h1>

      <div className="mt-24 flex justify-center">

        <img
          src="/images/hamster.png"
          onClick={tapHamster}
          className="w-64 cursor-pointer active:scale-95 transition duration-100 select-none"
          alt="Hamster"
        />

      </div>

      <div className="flex justify-between mt-16 text-sm">
        <span>⚡ 6500 / 6500</span>

        <Link to="/mine" className="text-white">
          Mine
        </Link>
      </div>

    </div>
  )
}

export default Home
