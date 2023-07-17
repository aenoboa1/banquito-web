import React, {useEffect, useState} from 'react';
import {AccountProductService} from "../../service/AccountProductService";
import {Divider} from "primereact/divider";
import {BreadCrumb} from "primereact/breadcrumb";
import {DataView} from "primereact/dataview";
import {InputNumber} from 'primereact/inputnumber';
import {FormikFormDebtor} from "../../components/pure/forms/debtorForm";

export default function AccountTransfer() {
    const items = [{label: 'Transacciones'}, {label: 'Transferencia'}];
    const home = {icon: 'pi pi-home'}

    const [product, setProduct] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        AccountProductService.getProductSaving().then(
            (data) => setProduct(data),
        )
    }, []);

    const gridItem = (product) => {
        return (
            <div className="col-12 md:col-5 lg:col-6 xl:col-3">
                <div className="p-4 border-1 surface-border surface-card shadow-2 border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{product.id}</span>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{product.code}</span>
                        </div>
                    </div>
                    <Divider/>
                    <div className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center">Saldo disponible</div>
                        <div className="text-2xl font-bold">${product.availableBalance}</div>
                    </div>
                </div>
            </div>
        );
    };


    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        if (layout === 'grid')
            return gridItem(product);
    };
    return (
        <div>
            <BreadCrumb model={items} home={home}/>
            <div className="card">
                <div className="card flex justify-content-center p-4">
                    <span className="p-float-label">
                        <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)}
                                     mode="currency" currency="USD" locale="en-US"/>
                        <label htmlFor="number-input">Ingrese el monto</label>
                    </span>
                </div>
            </div>

                <div className="contenedor">
                    <DataView value={product} itemTemplate={itemTemplate} layout="grid"/>
                </div>

            <Divider align="center">
                <span className="p-tag">Ingrese beneficiario</span>
            </Divider>
            <FormikFormDebtor monto={value}

            />
        </div>
    );
}