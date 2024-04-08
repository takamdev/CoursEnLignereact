import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBars from "./components/NavBars.jsx"
import Root from "./Root.jsx"
import Boutique from "./pages/Boutique.jsx"
import ListCours from "./pages/ListCours.jsx"
import Formateur from "./pages/Formateur.jsx"
import Blog from "./pages/Blog.jsx"
import CoursItem from "./pages/CoursItem.jsx"
import CoursItemItem from "./pages/CoursItemItem.jsx"
const root = createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    errorElement:"page nom trouver",
    children:[
       {
        path:"",
        element:<Boutique/>
       },
       {
        path:"/ListCours",
        element: <ListCours/>
       },
       {
        path:"/Formateur",
        element: <Formateur/>
       },
       {
        path:"/Blog",
        element: <Blog/>
       },
       {
        path:"/coursItem/:id",
        element: <CoursItem/>
       },{
        path:"/coursItem/coursItemItem/:id",
        element: <CoursItemItem/>
       }

    ]
       
    
  }
  

]
)

function App() {

  return (
  <RouterProvider router={root}/>
  )
}

export default App