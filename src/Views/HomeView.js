import React, {useState} from 'react';
import './homeView.css'
import HarryPotter from '../assets/img/harry.JPG'
import Popcorn from '../assets/img/pop.png'

const HomeView = () => {

    const [count, setCount] = useState(0);
    const [ordPrice, setOrdPrice] = useState(0);

    function Ordinary() {
        setCount(count + 1);
        setOrdPrice(ordPrice + 129)
    }

    function decOrdinary() {
        if (count == 0) {
            setCount(0)
        } else {
        setCount(count - 1);
        setOrdPrice(ordPrice - 129)
        }
    }

    const [PenCount, setPenCount] = useState(0)
    const [PenPrice, setPenPrice] = useState(0)

    function Retired() {
        setPenCount(PenCount + 1)
        setPenPrice(PenPrice + 103)
    }

    function decRetired() {
           if (PenCount == 0) {
                setPenCount(0)
            } else {
                setPenCount(PenCount - 1)
                setPenPrice(PenPrice - 103)
            }
      
    }

    const [kidCount, setKidCount] = useState(0);
    const [kidPrice, setKidPrice] = useState(0);

    function Kid() {
        setKidCount(kidCount + 1)
        setKidPrice(kidPrice + 103)
    }

    function decKid() {
        if (kidCount == 0) {
            setKidCount(0)
            setKidPrice(0)
        } else {
            setKidCount(kidCount - 1)
            setKidPrice(kidPrice - 103)
        }
    }

    const [sum, setSum] = useState(0)

    const totalSum = kidPrice + PenPrice + ordPrice;


  
  
    return(
    <div className='buy-tickets-card'>
               
        <div className='left-side'>
     
                <section className='ticket-type'>
                    <h1 className='headline'>Välj antal biljetter</h1>
                    <h2 className='ticket1'>Ordinarie</h2>
                   
                    <h2 className='ticket3'>Barn(t.o.m. 11 år)<span className='sale'>Barnrabatt - 20% rabatt</span></h2>
                    <h2 className='ticket2'>Pensionär <span className='sale'>Pensionärsrabatt -20% rabatt</span></h2>
                </section>
                <section className='choose-ticket'>
                    <div className='choose'><div className='minus' onClick={decOrdinary}>-</div><span className="digit">{count}</span><div className='plus' onClick={Ordinary}>+</div></div>
                    <div className='choose'><div className='minus' onClick={decKid}>-</div><span className="digit">{kidCount}</span><div className='plus' onClick={Kid}>+</div></div>
                    <div className='choose'><div className='minus' onClick={decRetired}>-</div><span className="digit">{PenCount}</span><div className='plus' onClick={Retired}>+</div></div>   
                </section>

                <div className='left-end'>
                <div className='popcorn-div'>
                    <img className='popcorn' src={Popcorn} />
                </div>
                <h3 className='popcorn-text'>Vid köp över 500 kr bjuder vi på popcorn!</h3>
                </div>
        </div>
    

        <div className='right-side'>
                <div className='movie-div'>
                    <div className='img-container'>
                        <img className='img' src={HarryPotter} />
                    </div>
                    <div className='movie-info'>
                        <h1 className='movie-title'>Harry Potter</h1>
                        <p className='place'>Biografen, Salong 7</p>
                        <p className='time'>Onsdag 14:30</p>
                    </div>
                </div>
                <div className='cart'>
                    <p className='line'>{count} st Ordinarie<span className='price'> {ordPrice} kr</span></p>
                    <p className='line'>{kidCount} st Barn(t.o.m. 11 år)<span className='kidprice'> {kidPrice} kr</span></p>
                    <p className='line'>{PenCount} st Pensionär<span className='price'> {PenPrice} kr</span></p>
                    
                    {totalSum >= 500 ? <p className='free'><em>Du får en gratis popcorn!</em></p> :<p className='free-pop'><em>Du har {500-totalSum} kr kvar till en gratis popcorn</em></p>}
                    
                    <h4 className='sum'>Totalt att betala:<span className='sumPrice'>{totalSum}</span></h4>
                </div>
        </div>

    </div>
  
  
       
       
    )
};

export default HomeView;
