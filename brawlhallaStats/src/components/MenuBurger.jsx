import "../styles/MenuStyle.scss"


const MenuBurger = () => {
  return (
    <div className="container">
    <div className="burger">
      <ul className="BurgerLinks">
      <li >Legends</li>
      <li >Stats</li>
      <li >News</li>
      <li >AboutUs</li>
      </ul>
      <button type="button" className="BurgerButton" >
      <span className="Burger_Bar" /></button>
      </div>
      </div>
  )
}

export default MenuBurger