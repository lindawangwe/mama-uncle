import { Menu, UsersRound, ShoppingBasket, Search, ArrowLeft } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { Button } from '../components/Button'
import { useState } from 'react';
import { useSidebarContext } from '../contexts/SideBarContexts';


export function Navbar () {
const [showFullWidthSearch, setShowFullWidthSearch]= useState(false);



 return(
  <nav className="fixed z-50 top-0 left-0 w-full bg-teal-900 text-amber-700  shadow-md">
  
    <div className="flex gap-10 lg:gap-20 justify-between items-center h-16 mx-4 mb-2 pt-2 z-20 ">
     
      <NavbarFirst hidden ={showFullWidthSearch}/>
      <form className={` flex-grow gap-4 justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>

      {showFullWidthSearch &&
        <Button 
            onClick={()=>setShowFullWidthSearch(false)}
            variant="ghost" 
            size="icon" 
            className="flex-shrink-0"
        >
          <ArrowLeft />
        </Button>}

        <div className="flex flex-grow max-w-[600px]">
            <input 
              type="search" 
              placeholder="Search store"
              className="rounded-l-full border border-secondary-border shadow-inner
             shadow-secondary py-2 px-4 w-full text-lg focus:border-blue-900 outline-none"
             />
            <Button  onClick={()=> setShowFullWidthSearch(true)} className="py-2 px-4  border-secondary-border border border-l-0 flex-shrink-0 rounded-r-full ">
              <Search />
            </Button>
        </div>
      </form>
      <div 
        className={ `flex-shrink-0 gap-2 p-2
        ${showFullWidthSearch ? "hidden" : "flex"}`}
        >
        <Button 
          onClick={()=> setShowFullWidthSearch(true)} 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon"
        >
          <UsersRound />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingBasket />
        </Button>
      </div>
    </div>
</nav>

 
 

 )  
} 

type NavbarFirstProps = {
  hidden?: boolean
}


export function NavbarFirst ({
  hidden = false,
}:NavbarFirstProps){

  const {toggle} = useSidebarContext()

  return <div 
  className={ `gap-4 items-center flex-shrink-0 ${ hidden ? "hidden" : "flex"}`}>
    <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
    </Button>            
    <a href="#">
      <img src={logo} className="h-16 "/>
    </a>
    <h1 className="font-bold">MAMA UNCLE</h1>
  </div>

}