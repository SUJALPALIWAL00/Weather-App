import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const Header = () => {

    const [name, setName] = useState("");
    const [temp, setTemp] = useState(null);
    const [imgurl, setImgurl] = useState("")
    const [text, setText] = useState("")
    const [realfeel, setRealfeel] = useState("")
    const [humidity, setHumidity] = useState("")
    const [currentTime, setCurrentTime] = useState(new Date());
    const [error, setError] = useState("")
    // ------way to get variable from .env------
    // const API_Key = import.meta.env.VITE_API_KEY
    const API_Key = "36f695d5e8c244f3ada162038251704"
    const apiAddress = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${name}&aqi=no`

    const day = currentTime.toLocaleString('en-US', { weekday: 'long' });
    const date = currentTime.getDate();
    const month = currentTime.toLocaleString('en-US', { month: 'long' });
    const time = currentTime.toLocaleTimeString();



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[]);


    const fetchWeather = async (e) => {
        setTemp(null)
        e.preventDefault()
        try {
            const response = await axios.get(apiAddress)
            setTemp(response.data.current.temp_c)
            setImgurl(response.data.current.condition.icon)
            setText(response.data.current.condition.text)
            setRealfeel(response.data.current.feelslike_c)
            setHumidity(response.data.current.humidity)
        } catch (error) {
            setError("Enter a valid Location")
        }
    }
    return (
        <div>
            <div className="head ml-5 mt-5">
                <div className="text ">
                    <p className="date text-white text-xl">It's {day}, {month} {date}, {time}</p>
                    <p className='text-white md:text-8xl text-4xl font-medium md:mt-0 mt-5' >We reveal the <br /> remarkable every day</p>
                </div>

                <form onSubmit={fetchWeather} className="search-city mt-15  flex gap-3 items-center ">
                    <input className=' rounded-xl bg-[#e8d5d5] py-3 pl-5 md:pr-85 text-xl' type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder=' 🔍 Enter Location' />
                    <button className=' border rounded-full bg-green-600 h-12 w-12 flex justify-center items-center' type='submit'><span class="material-symbols-outlined">search</span></button>
                </form>

                {temp !== null ?
                    <div className='bg-[#48090982] flex md:gap-15 gap-5 text-xl text-white py-8 md:px-5 mt-10 rounded-xl md:w-120 w-90'>
                        <div className="left flex items-center ">
                            <img className='w-25' src={imgurl} alt="" />
                            <p className='text-4xl md:text-5xl font-bold'>{temp}</p>
                        </div>
                        <div className="right">
                            <p>{text}</p>
                            <p>Feels: {realfeel}</p>
                            <p>Humidity: {humidity}</p>
                        </div>

                    </div> :
                    <div  className="text-2xl text-red-200 "><p>{error}</p></div>
                }
            </div>
        </div>
    )
}

export default Header
