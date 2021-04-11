import companyLogo from './lot_logo.svg';
import './App.css';
import Filters from '../Filters/Filters'
import data from '../../Data/flights.json'
import CardBoxTo from '../CardBoxTo/CardBoxTo';
import CardBoxBack from '../CardBoxBack/CardBoxBack';

function App() {

  let flightsArr = data.result.flights;

  return (
   <>
   <main>
     <div className="container">
       <div className="main-content">
         <Filters />
         
          <div className="flights">
            <div className="flights__inner">

              {flightsArr.map((item, index) => {

                let flight = item.flight;                   
                let price = flight.price.total.amount;
                let currency = flight.price.total.currencyCode;

                return(   
                  <div className="flight-card" key = {index}>
                    <div className="flight-card__header">
                      <div className="flight-card__logo-container"><img src={companyLogo} alt="" className="flight-card__logo-img"/></div>
                      <div className="flight-card__price-container"><span className="flight-card__price-value">{price} {currency}</span><span className="flight-card__price-description">Стоимость для одного взрослого пассажира</span></div>
                    </div>
                      <CardBoxTo flight = {flight} />
                        <hr className='flight-card__hr'/>
                      <CardBoxBack  flight = {flight}/>
                    <button className = 'flight-card__button'>Выбрать</button>
                    
                  </div>  
                )

              })}
          
            </div>  {/* /flights__inner */}
            <button className="flights__button-more">Показать еще</button>
          </div>    {/* flights */}      
       </div> {/* /main-content */}
     </div>{/* /container */}
     
   </main>
   </>
  );
}

export default App;
