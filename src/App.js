import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';
import SearchResultsPage from './Components/SearchResultsPage';


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
      path:'about',
      element:<AboutPage/>
    },
    {
      path:'search',
      element:<SearchResultsPage/>
    }
  ]
}])


function App() {
  return (
      <Provider store={store}>
    <div className="h-full w-full bg-black bg-opacity-95 font-bold text-white scroll-smooths">
      <RouterProvider router={appRouter}/>
    </div>
      </Provider>
  );
}



export default App;
