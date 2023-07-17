import React, {useEffect, useRef, useState} from 'react';
import {SlideMenu} from 'primereact/slidemenu';
import {Button} from 'primereact/button';
import {Avatar} from "primereact/avatar";
import useStateContext from "../../hooks/useStateContext";
import {useNavigate} from "react-router-dom";

export default function AppUserSettings() {
    const {resetContext} = useStateContext();
    const {context, setContext} = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const logout = () => {
        resetContext();
        navigate("/");
    };

    const menu = useRef(null);
    const items = [
        {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
        },
        {
            separator: true
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-fw pi-power-off',
            command: () => { window.location = "/"; }
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <SlideMenu ref={menu} model={items} popup viewportHeight={100}
                       menuWidth={175}/>
            <Button onClick={(event) => menu.current.toggle(event)} className="w-full p-link flex align-items-center">
                <Avatar label={context.user.charAt(0)} style={{ backgroundColor: '#800005', color: '#ffffff' }}  image="" className="mr-2" shape="circle" />
                <div className="flex flex-column align">
                    <span className="font-bold">{context.user}</span>
                </div>
            </Button>

        </div>
    )
}