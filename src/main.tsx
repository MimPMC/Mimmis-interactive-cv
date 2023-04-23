import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { NotFound } from './components/NotFound';
import { Overview } from './components/Overview';
import { ProjectInfo } from './components/ProjectInfo';
import { PortfolioPage } from './pages/PortfolioPage';
import { StartPage } from './pages/StartPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Startpage */}
      <Route index element={<StartPage />} />
      {/* Startpage */}
      <Route path="/portfolio" element={<PortfolioPage />} />
        <Route index element={<Overview/>} />
      <Route path="/portfolio/:id" element={<ProjectInfo/>} />
      <Route path="*" element={<NotFound />} />
    </Route> 
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS
          theme={{

            headings: {
              // properties for all headings
              fontWeight: 400,
              fontFamily: 'DynaPuff, cursive'}}}
          >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
