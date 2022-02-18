import './Navibar.css'
import { Link } from 'react-router-dom';

const Navibar = () => {
   
    const logoNavibar = 'https://icons.iconarchive.com/icons/arrioch/office-dock/128/Whack-MS-Access-icon.png'

    return (
          <div className="App">
            <nav>
              <div className='conteiner'>
                 <div className='logo'>
                    <Link to='/'>
                        <img src={logoNavibar} alt="Logo" width='50%' height='50%' />
                    </Link>
                 </div>
                 <div className='name'>
                    <span>Hard way</span>
                 </div>
                 <div className='list'>
                    <a href='https://trello.com/b/ofohxOhw/timothy' target='blank'><button className='btn btn-warning'>Trello</button></a>
                    <Link to="/marathon" className="btn btn-outline-light boards">Marathon</Link>
                    <Link to="/boards" className="btn btn-dark boards">Boards</Link>
                    <Link to='/about' type="button" className="btn btn-dark about">Progress</Link>
                    <Link to='/info' type="button" className="btn btn-info info">Info</Link>
                 </div>
              </div>
            </nav>
          </div>
    )
}

export default Navibar;