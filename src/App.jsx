import React from 'react'
import Top from './components/Top.jsx'
import Card from './components/Card.jsx'
import data from './data.js'
import './index.css'

function App(){
    const cardElements = data.map(card => {
        return <Card 
        key={card.id}
        {...card}
        />
    })
    return(
        <div>
            <Top />
            <section className='cards-list'>{cardElements}</section>
        </div>
    )
}

export default App