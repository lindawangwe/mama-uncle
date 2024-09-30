
import { useState } from 'react'
import './App.css'
import { CategoryPills } from './components/CategoryPills'
import { categories} from './data/home'
import { Navbar } from './layouts/Navbar'
import { Sidebar } from './layouts/Sidebar'
import { SidebarProvider } from './contexts/SideBarContexts'
import { ProductItem } from './components/ProductItem'




function App() {
 const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
  <SidebarProvider>
    <div className="max-h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-[auto,1fr] overflow-auto flex-grow-1 pt-16">
        <Sidebar/>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 z-10 pb-4 bg-teal-700 ">
            <CategoryPills 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory}
              />
          </div>
        
        
          <div className="pt-20 h-[50%] bg-gradient-to-b from-teal-700 overflow-hidden"></div>
          <div className="bg-teal-700 gap-4 p-4 text-center">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
    
  </SidebarProvider>
  )
}

export default App
