import React, { useContext } from 'react'
import UserContext from '../context/UseContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-xl shadow-lg">
          <h2 className="text-gray-300 text-lg">
            Please login to view profile
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 space-y-6">

        <h2 className="text-3xl font-bold text-center text-white">
          Profile
        </h2>

        <div className="bg-zinc-800 p-5 rounded-xl space-y-3 border border-zinc-700">

          <p className="text-gray-300">
            <span className="text-gray-500">WellCome:</span> {user.username}!
          </p>

          <p className="text-gray-300">
            <span className="text-gray-500">Password:</span> {user.password}
          </p>

        </div>

      </div>
    </div>
  )
}

export default Profile