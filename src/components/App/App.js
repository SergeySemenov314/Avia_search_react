import companyLogo from './lot_logo.svg';
import './App.css';
import Filters from '../Filters/Filters'
import data from '../../Data/flights.json'

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

                let segmentsTo = flight.legs[0].segments;
                let segmentsBack = flight.legs[1].segments;

                let segmentsToLast = segmentsTo.length - 1;
                let segmentsBackLast= segmentsBack.length - 1;


                // ==================== ToDuration ================= 


                let segmentToDuration1 = segmentsTo[0].travelDuration;
                let segmentToDuration2 = segmentsTo[segmentsToLast].travelDuration;
                // Здесь я получаю минуты, надо перевести в часы и минуты
                let segmentToDurationTotal = segmentToDuration1 + segmentToDuration2;
                  // ============================= ToDeparture======================================
                let segmentToDepartureCity = segmentsTo[0].departureCity.caption;
                let segmentToDepartureAirport = segmentsTo[0].departureAirport.caption;
                let segmentToDepartureAirportCode = segmentsTo[0].departureAirport.uid;
                // segmentToDepartureTime. Из этой переменной (строка) можно получить время
                let segmentToDepartureDate = segmentsTo[0].departureDate;
                let segmentToDepartureAirline = segmentsTo[0].airline.caption;
                let segmentToTransplants = segmentsTo.length - 1;

                // ============================= ToArrival======================================

                let segmentToArrivalCity = segmentsTo[segmentsToLast].arrivalCity?.caption;
                let segmentToArrivalAirport = segmentsTo[segmentsToLast].arrivalAirport.caption;
                let segmentToArrivalAirportCode = segmentsTo[segmentsToLast].arrivalAirport.uid;
                // segmentToDepartureTime. Из этой переменной (строка) можно получить время
                let segmentToArrivalDate = segmentsTo[segmentsToLast].arrivalDate;





                

                // ==================== backDuration ================= 


                let segmentBackDuration1 = segmentsBack[0].travelDuration;
                let segmentBackDuration2 = segmentsBack[segmentsBackLast].travelDuration;
                // Здесь я получаю минуты, надо перевести в часы и минуты
                let segmentBackDurationTotal = segmentBackDuration1 + segmentBackDuration2;

                  // ============================= backDeparture======================================

                let segmentBackDepartureCity = segmentsBack[0].departureCity?.caption;
                let segmentBackDepartureAirport = segmentsBack[0].departureAirport.caption;
                let segmentBackDepartureAirportCode = segmentsBack[0].departureAirport.uid;
                // segmentBackDepartureTime. Из этой переменной (строка) можно получить время
                let segmentBackDepartureDate = segmentsBack[0].departureDate;
                let segmentBackDepartureAirline = segmentsBack[0].airline.caption;
                let segmentBackTransplants = segmentsBack.length - 1;

                // ============================= backArrival======================================


                let segmentBackArrivalCity = segmentsBack[segmentsBackLast].arrivalCity.caption;
                let segmentBackArrivalAirport = segmentsBack[segmentsBackLast].arrivalAirport.caption;
                let segmentBackArrivalAirportCode = segmentsBack[segmentsBackLast].arrivalAirport.uid;
                // segmentBackDepartureTime. Из этой переменной (строка) можно получить время
                let segmentBackArrivalDate = segmentsBack[segmentsBackLast].arrivalDate;

                
                return(

                  
                <div className="flight-card" key = {index}>
                  <div className="flight-card__header">
                    <div className="flight-card__logo-container"><img src={companyLogo} alt="" className="flight-card__logo-img"/></div>
                    <div className="flight-card__price-container"><span className="flight-card__price-value">{price} {currency}</span><span className="flight-card__price-description">Стоимость для одного взрослого пассажира</span></div>
                  </div>
                  <div className="flight-card__flight-to flight-card__info-container">
                    <div className="flight-card__route">
                      <span className="flight-card__route-from">{segmentToDepartureCity}, <span className = 'flight-card__airport'>{segmentToDepartureAirport}</span><span className="flight-card__airport-code">({segmentToDepartureAirportCode})</span> </span>
                      <span className="flight-card__route-to">{segmentToArrivalCity}, <span className = 'flight-card__airport'>{segmentToArrivalAirport}</span><span className="flight-card__airport-code">({segmentToArrivalAirportCode})</span></span>
                    </div>
                    <div className="flight-card__time-container">
                      <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">{segmentToDepartureDate}</span>
                      </div>
                      <div className="flight-card__duration">
                        <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                        <div className="flight-card__duration-time">{segmentToDurationTotal} мин.</div>
                      </div>
                      <div className="flight-card__arrival"><span className="flight-card__arrival-date">{segmentToArrivalDate}</span> <span className="flight-card__arrival-time">9:15</span>
                      </div>
                    </div>
                    <div className="flight-card__transplants">{segmentToTransplants} пересадка(-ки)</div>
                    <span className="flight-card__company">Рейс выполняет: {segmentToDepartureAirline}</span>
                  </div>
                      <hr className='flight-card__hr'/>
                

                    <div className="flight-card__flight-to flight-card__info-container">
                      <div className="flight-card__route">
                          <span className="flight-card__route-from">{segmentBackDepartureCity}, <span className = 'flight-card__airport'>{segmentBackDepartureAirport}</span><span className="flight-card__airport-code">({segmentBackDepartureAirportCode})</span> </span>
                          <span className="flight-card__route-to">{segmentBackArrivalCity}, <span className = 'flight-card__airport'>{segmentBackArrivalAirport}</span><span className="flight-card__airport-code">({segmentBackArrivalAirportCode})</span></span>
                      </div>
                      <div className="flight-card__time-container">
                          <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">{segmentBackDepartureDate}</span>
                          </div>
                          <div className="flight-card__duration">
                          <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                          <div className="flight-card__duration-time">{segmentBackDurationTotal} мин.</div>
                          </div>
                          <div className="flight-card__arrival"><span className="flight-card__arrival-date">{segmentBackArrivalDate}</span> <span className="flight-card__arrival-time">9:15</span>
                          </div>
                      </div>
                      <div className="flight-card__transplants">{segmentBackTransplants} пересадка(-ки)</div>
                      <span className="flight-card__company">Рейс выполняет: {segmentBackDepartureAirline}</span>
                  </div>
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
