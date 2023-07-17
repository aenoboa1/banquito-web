import './App.css';
import AppTopbar from "./layout/mainLayout/AppTopbar";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import AccountProducts from "./Pages/account-products/AccountProducts";
import AccountProductsDetail from "./Pages/account-products/AccountProductDetail";
import LoginDemo from "./components/pure/forms/login";
import LoginLayout from "./layout/loginLayout";
import AccountTransfer from "./Pages/account-transactions/accountTransfer";
import {ContextProvider} from "./hooks/useStateContext";
import React from "react";
import Registro from "./components/pure/forms/registro";

const router = createBrowserRouter([
    {
        path: '/accounts',
        element: <AppTopbar/>,
        children:
            [
                {
                    path: '',
                    element: <AccountProducts/>
                },
                {
                    path: '/accounts/detail',
                    element: <AccountProductsDetail/>
                },
                {
                    path: '/accounts/transfer',
                    element: <AccountTransfer/>
                }
            ]
    },
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                path: '',
                element: <LoginDemo/>
            },
            {
                path: '/register',
                element: <Registro/>
            }
        ]
    }
]);

function App() {
    return (
        <div className="App">
            <ContextProvider>
              <RouterProvider router={router}/>
            </ContextProvider>
        </div>
    );
}

export default App;

