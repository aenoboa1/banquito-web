import React, {useState} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import {Image} from 'primereact/image';
import AppSideMenu from "./AppSideMenu";
import AppUserSettings from "./AppUserSettings";
import logo from '../../assets/logo.png';
import {Outlet} from 'react-router-dom';
export default function AppTopbar() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <header className="top-bar">
                <div className="flex gap-2 justify-content-center">
                    <Sidebar visible={visible} onHide={() => setVisible(false)} >
                        <h2>Banco Banquito</h2>
                        <AppSideMenu />
                    </Sidebar>
                    <Button icon="pi pi-bars" onClick={() => setVisible(true)} size="small" />
                    <div className="flex gap-2 justify-content-center">
                        <Image className="logo-topbar" src={logo} alt="Image" width="35"/>
                        <h1 className="text-white logo-topbar">BanQuito</h1>
                    </div>
                </div>
                <AppUserSettings />
            </header>
            <Outlet/>
        </div>
    );
}