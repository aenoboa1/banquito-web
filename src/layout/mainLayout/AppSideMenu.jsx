import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';

export default function AppSideMenu() {
    const items = [
        {
            label:'Mis Productos',
            icon:'pi pi-fw pi-box',
            items:[
                {
                    label:'Cuentas',
                    icon:'pi pi-fw pi-file',
                    command:()=>{window.location ="/accounts"}
                },
                {
                    label:'Préstamos',
                    icon:'pi pi-fw pi-dollar'
                }
            ]
        },
        {
            label:'Transacciones',
            icon:'pi pi-fw pi-arrow-right-arrow-left',
            items:[
                {
                    label:'Transferencias',
                    icon:'pi pi-fw pi-upload',
                    command:()=>{window.location ="/accounts/transfer"}
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-25rem" multiple="true"/>
        </div>
    )
}