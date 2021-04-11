import companyLogo from './lot_logo.svg';
import './App.css';

function App() {
  return (
   <>
   <main>
     <div className="container">
       <div className="main-content">
          <div className="filters">
            <div className="filters__inner">
                <div className="sort-filter filters__sort">
                    <p className="sort-filter__heading">Сортировать</p>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort1' name = 'sort' className="sort-filter__radio"/>
                      <label htmlFor="sort1" className="sort-filter__label">- по возрастанию цены</label>
                    </div>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort2' name = 'sort' className="sort-filter__radio"/>
                      <label htmlFor="sort2" className="sort-filter__label">- по убыванию цены</label>
                    </div>
                    <div className="sort-filter__input-box">
                      <input type="radio" id = 'sort3' name = 'sort' className="sort-filter__radio"/>
                      <label htmlFor="sort3" className="sort-filter__label">- по времени в пути</label>
                    </div>         
                 </div>
                 <div className="transfer-filter filters__transfer">
                   <p className="transfer-filter__heading">Фильтровать</p>
                   <div className="transfer-filter__input-box">
                      <input type="checkbox" id = 'transfer1' name = 'transfer' className="transfer-filter__radio"/>
                      <label htmlFor="transfer1" className="transfer-filter__label">- 1 пересадка</label>
                    </div> 
                    <div className="transfer-filter__input-box">
                      <input type="checkbox" id = 'transfer2' name = 'transfer' className="transfer-filter__radio"/>
                      <label htmlFor="transfer2" className="transfer-filter__label">- без пересадок</label>
                    </div>                   
                 </div>
                 <div className="price-filter filters__price">
                   <p className="price-filter__heading">Цена</p>
                   <div className="price-filter__input-box">          
                      <label htmlFor="price1" className="price-filter__label">От</label>
                      <input type="number" id = 'price1' name = 'price' className="price-filter__radio" placeholder ='0' />
                    </div>  
                    <div className="price-filter__input-box">          
                      <label htmlFor="price2" className="price-filter__label">До</label>
                      <input type="number" id = 'price2' name = 'price' className="price-filter__radio" placeholder ='10000'/>
                    </div>  
                 </div>
                 <div className="company-filter filters__company">
                   <p className="company-filter__heading">Авиакомпании</p>
                   <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company1' name = 'company' className="company-filter__radio"/>
                      <label htmlFor="company1" className="company-filter__label">
                        <span className="company-filter__name">- Аэрофлот </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                    <div className="company-filter__input-box">
                      <input type="checkbox" id = 'company1' name = 'company' className="company-filter__radio"/>
                      <label htmlFor="company1" className="company-filter__label">
                        <span className="company-filter__name">- Другая компания </span><span className="company-filter__price">от 21000</span>
                      </label>
                    </div> 
                 </div>
              </div>{/* /filters__inner */}
          </div>{/* /filters */}

          <div className="flights">
            <div className="flights__inner">
              <div className="flight-card">
                <div className="flight-card__header">
                  <div className="flight-card__logo-container"><img src={companyLogo} alt="" className="flight-card__logo-img"/></div>
                  <div className="flight-card__price-container"><span className="flight-card__price-value">105368 RUB</span><span className="flight-card__price-description">Стоимость для одного взрослого пассажира</span></div>
                </div>
                <div className="flight-card__flight-to flight-card__info-container">
                  <div className="flight-card__route">
                    <span className="flight-card__route-from">Москва, <span className = 'flight-card__airport'>ШЕРЕМЕТЬЕВО</span><span className="flight-card__airport-code">(SVO)</span> </span>
                    <span className="flight-card__route-to">ПАРИЖ ПАРИЖ, <span className = 'flight-card__airport'>ШАРЛЬ ДЕ ГОЛЛЬ</span><span className="flight-card__airport-code">(CDG)</span></span>
                  </div>
                  <div className="flight-card__time-container">
                    <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">18 авг.</span>
                    </div>
                    <div className="flight-card__duration">
                      <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                      <div className="flight-card__duration-time">3 ч. 5 мин.</div>
                    </div>
                    <div className="flight-card__arrival"><span className="flight-card__arrival-date">18 авг.</span> <span className="flight-card__arrival-time">9:15</span>
                    </div>
                  </div>
                  <div className="flight-card__transplants">1 пересадка(-ки)</div>
                  <span className="flight-card__company">Рейс выполняет: Air France</span>
                </div>
                    <hr className='flight-card__hr'/>
               

                <div className="flight-card__flight-back flight-card__info-container">
                    <div className="flight-card__route">
                      <span className="flight-card__route-from">Москва, <span className = 'flight-card__airport'>ШЕРЕМЕТЬЕВО</span><span className="flight-card__airport-code">(SVO)</span> </span>
                      <span className="flight-card__route-to">ПАРИЖ ПАРИЖ, <span className = 'flight-card__airport'>ШАРЛЬ ДЕ ГОЛЛЬ</span><span className="flight-card__airport-code">(CDG)</span></span>
                    </div>
                    <div className="flight-card__time-container">
                      <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">18 авг.</span>
                      </div>
                      <div className="flight-card__duration">
                        <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                        <div className="flight-card__duration-time">3 ч. 5 мин.</div>
                      </div>
                      <div className="flight-card__arrival"><span className="flight-card__arrival-date">18 авг.</span> <span className="flight-card__arrival-time">9:15</span>
                      </div>
                    </div>
                    <div className="flight-card__transplants">1 пересадка(-ки)</div>
                    <span className="flight-card__company">Рейс выполняет: Air France</span>
                </div>
                <button className = 'flight-card__button'>Выбрать</button>
                
              </div>   {/* flight-card */}

              <div className="flight-card">
                <div className="flight-card__header">
                  <div className="flight-card__logo-container"><img src={companyLogo} alt="" className="flight-card__logo-img"/></div>
                  <div className="flight-card__price-container"><span className="flight-card__price-value">105368 RUB</span><span className="flight-card__price-description">Стоимость для одного взрослого пассажира</span></div>
                </div>
                <div className="flight-card__flight-to flight-card__info-container">
                  <div className="flight-card__route">
                    <span className="flight-card__route-from">Москва, <span className = 'flight-card__airport'>ШЕРЕМЕТЬЕВО</span><span className="flight-card__airport-code">(SVO)</span> </span>
                    <span className="flight-card__route-to">ПАРИЖ ПАРИЖ, <span className = 'flight-card__airport'>ШАРЛЬ ДЕ ГОЛЛЬ</span><span className="flight-card__airport-code">(CDG)</span></span>
                  </div>
                  <div className="flight-card__time-container">
                    <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">18 авг.</span>
                    </div>
                    <div className="flight-card__duration">
                      <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                      <div className="flight-card__duration-time">3 ч. 5 мин.</div>
                    </div>
                    <div className="flight-card__arrival"><span className="flight-card__arrival-date">18 авг.</span> <span className="flight-card__arrival-time">9:15</span>
                    </div>
                  </div>
                  <div className="flight-card__transplants">1 пересадка(-ки)</div>
                  <span className="flight-card__company">Рейс выполняет: Air France</span>
                </div>
                    <hr className='flight-card__hr'/>
               

                <div className="flight-card__flight-back flight-card__info-container">
                    <div className="flight-card__route">
                      <span className="flight-card__route-from">Москва, <span className = 'flight-card__airport'>ШЕРЕМЕТЬЕВО</span><span className="flight-card__airport-code">(SVO)</span> </span>
                      <span className="flight-card__route-to">ПАРИЖ ПАРИЖ, <span className = 'flight-card__airport'>ШАРЛЬ ДЕ ГОЛЛЬ</span><span className="flight-card__airport-code">(CDG)</span></span>
                    </div>
                    <div className="flight-card__time-container">
                      <div className="flight-card__departure"><span className="flight-card__departure-time">6:10</span> <span className="flight-card__departure-date">18 авг.</span>
                      </div>
                      <div className="flight-card__duration">
                        <img className = 'flight-card__duration-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIid3Uy04UURAG4C8DzDsgrnwCY3wGhhW3kNm4ML6BvoE7LobbkiURRZ9BExPXEFcqEYwbbq5lPc3iVCed4fT0DKzwT046Xeev+k/X+bv439FGF+9xhKtYRxHrBudWWMRvFLjAPtZj7UeswAkWRincwlokH2A6YjleB4fBXa3h3cCbSNjB+BD8MaxEzkoTeTGIG5m9Z/g+IHczcufrCG2p5wdxqn68jgJ1GJPadYyJHKEbBaZrCjQJkO6kwFIZqF7KAv7ic0ORQfiES5U2VQWe4At6dxDo4Sue5gQmcXaH4iVO8SAn0IQ/8dwcRa3q8wtMDeDu4jFexvurGt5DnOc23oVI01eVfn+R2WtJl/w2l1jatNMgAM/xKBOf0WfTKtrS4Do03Ijoxzi+4ZeaH430LxTYuoXAtmTT2SZiOUl3Bp2kguqwWx7mJC1p9BZSuzrqx/WM1JZeiIxie/PS4CokZ3yQpuwGPkaskHo+N0rhKiYkR+zhJ/7F+iFZcclwbbzHuAZIB1yXfoCluwAAAABJRU5ErkJggg==" alt=""/>
                        <div className="flight-card__duration-time">3 ч. 5 мин.</div>
                      </div>
                      <div className="flight-card__arrival"><span className="flight-card__arrival-date">18 авг.</span> <span className="flight-card__arrival-time">9:15</span>
                      </div>
                    </div>
                    <div className="flight-card__transplants">1 пересадка(-ки)</div>
                    <span className="flight-card__company">Рейс выполняет: Air France</span>
                </div>
                <button className = 'flight-card__button'>Выбрать</button>
                
              </div>   {/* flight-card */}
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
