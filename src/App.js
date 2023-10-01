import './App.scss'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

function App() {
  const [count, setCount] = useState([])
    console.log(count)
    // console.log(count[0]?.data.title,'-----------------')
    // console.log(count[0]?.data.url,'-----------------')
    // console.log(count[0]?.data.selftext_html,'-----------------')
    // console.log(count[0]?.data.score,'-----------------')
    useEffect(()=>{
        async function getData(){
        let img = await axios.get('https://www.reddit.com/r/reactjs.json')
        setCount(img.data.data.children)
        }
        getData()
    },[])
    return(
    <React.Fragment>
    <ul>
    {
        count.map((value,index) => {
            // console.log(value?.data)
            let str = value?.data?.selftext_html
            // console.log(typeof str)
            // console.log(str,'------------------------------')
            return(
                <li key={index}>
                    <header>
                        <h1>{value?.data?.title}</h1>
                    </header>
                    <main>
                    {str !== null ? <p>{parse(parse(str.toString()))}</p>: null}
                    </main>
                    {/* <div>{parse(parse(data))}</div> */}
                    <footer>
                        <h1>Score : {value?.data?.score}</h1>
                        <button><a href={value?.data?.url}>Click</a></button>
                    </footer>
                </li>
            )
        })
    }
    </ul>
    </React.Fragment>
    )
}

export default App;
