// "use client"

// import { BrowserRouter } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// export default function RouterProvider({ children }: { children: React.ReactNode }) {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return <BrowserRouter>{children}</BrowserRouter>
// } 