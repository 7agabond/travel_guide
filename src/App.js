import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return(
            <div>
                 <Card key={item.id} item={item}/>
                <hr class="solid" />
            </div>
           
        )
    })

    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>
    )
}