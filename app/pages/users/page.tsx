'use client'
import HeroBanner from "@/app/components/Feature/herobanner";
import Nav from "@/app/components/nav";
import Link from "@/node_modules/next/link";
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('/api/posts')
            const response = await res.json()
            console.log(response.posts)    
            setData(response.posts)
          } catch(error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])
    return (
        <>
        <Nav></Nav>
        <div>Welcome to Mysql fetch data Page <Link href="/">Back to home</Link></div>
        {data.map((dat) => (
          <div key={dat.Id}>{dat.Name} {dat.email}{dat.Gender}</div>
        ))}
        </>
    )
}