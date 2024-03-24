import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBars from "./components/NavBars.jsx"
import Root from "./Root.jsx"
import Boutique from "./pages/Boutique.jsx"
import ListCours from "./pages/ListCours.jsx"
import Formateur from "./pages/Formateur.jsx"
import Blog from "./pages/Blog.jsx"
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