import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Cards from './components/Cards'


const App = () => {
  return (
    <div className='hero'>
        <img className='home-image' src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80' alt='car' />
        <input className="centered" type='text' placeholder=' Search' ></input>
        <AiOutlineSearch size={25} style={{fill: 'white'}} className='search'/>

        <div className='heading-component'>
            <h1>Find your Car</h1>
            <p><span>Explore the Market Place</span></p>
            <div className='card-component'>
                <Cards 
                name="BMW"
                image="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                link = 'https://www.bmw.ca/en/home.html'
                />

                <Cards name="Audi" image="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" link = 'https://www.audi.ca/ca/web/en.html'/>
                <Cards name="Mercedes" image="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" link = 'https://www.mercedes-benz.ca/en/home'/>
                <Cards name="Toyota" image="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" link = 'https://www.toyota.ca/toyota/en/'/>
                <Cards name="Nissan" image="https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" link = 'https://www.nissan.ca/'/>
                {/* <Cards name="Chevrolet" image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/> */}
            </div>
        </div>

    </div>
    
  )
}

export default App
