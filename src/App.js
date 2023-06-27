import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';


const AppLayout = () => {
  return(
    <div>
    <Header/>
    <Outlet/>
    </div>
  )
}


const appRouter = createBrowserRouter([{
  path:'/',
  element:<AppLayout/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    }
  ]
}])


function App() {
  return (
    <div className="h-full w-full bg-black bg-opacity-95 font-bold text-white scroll-smooths">
      <RouterProvider router={appRouter}/>
    </div>
  );
}



export default App;
