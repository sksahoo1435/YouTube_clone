// import { useState } from 'react';
// import './App.css'
// import Home from './components/Homes/Home'
// import Navbar from './components/Navigation/Header/Navbar'
// import Sidebar from './components/Navigation/Sidebar/Sidebar'

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <div className='app_container'>
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className='content_container'>
//         <Sidebar isCollapsed={isSidebarCollapsed} />
//         <main className='main_content'>
//           <Home />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App


import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Homes/Home';
import Navbar from './components/Navigation/Header/Navbar';
import Sidebar from './components/Navigation/Sidebar/Sidebar';


function RootLayout({ isSidebarCollapsed, toggleSidebar }) {
  return (
    <div className='app_container'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='content_container'>
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className='main_content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
