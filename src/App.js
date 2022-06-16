import './App.css';

function App() {
  return (
    <nav className='container'>
      <div className='RedBar'>
        <div className = "sns">
          <li>
            <a className = "Shop" href="https://www.a-rt.com/" target ="blank">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              SHOPPING MALL
            </a>
          </li>
          <li>
            <a clssName = "Facebook" href="https://www.facebook.com/abcmartkorea" target ="blank">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              FACEBOOK
            </a>
          </li>
          <li>
            <a className = "Instargram" href="https://www.instagram.com/accounts/login/?next=/abcmartkr/" target ="blank">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              INSTAGRAM
            </a>
          </li>
        </div>
        <div className ="shoes">
          <li>
            <a className = "Danner" href="http://dannerkorea.co.kr/" target = "blank">
              DANNER
            </a>
          </li>
          <li>
            <a className = "Sperry" href="https://sperrykorea.co.kr/" target = "blank">
              SPERRY
            </a>
          </li>
          <li>
            <a className = "Saucony" href="https://www.saucony.com/en/home/" target = "blank">
              SAUCONY
            </a>
          </li>
          <li>
            <a className = "Nuovo" href="https://abcmart.a-rt.com/product/brand/page/main?brandNo=000081&page=1" target = "blank">
              NUOVO
            </a>
          </li>
          <li>
            <a className = "Hawkins" href="http://hawkinskorea.co.kr/" target = "blank">
              HAWKINS
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default App;
