import React, {useState, useEffect} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Button} from 'primereact/button';
import {Divider} from 'primereact/divider';
import {AccountProductService} from "../../service/AccountProductService";
import {useNavigate} from "react-router-dom";

export default function AccountProducts() {
    const items = [{label: 'Mis Productos'}, {label: 'Cuentas'}];
    const home = {icon: 'pi pi-home'}
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [data, setData] = useState({data: []});
      const navigate = useNavigate();
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        AccountProductService.getAccountProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const listItem = (product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div
                        className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.id}</div>
                            <div className="text-2xl font-bold text-900">{product.code}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <Button label="Detalle" id={product.id} icon="pi pi-money-bill" size="small" rounded
                                            onClick={() =>
                                                navigate('detail', { state: product })
                                            }>
                                    </Button>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center md:align-items-end gap-3 sm:gap-2">
                            <span className="font-semibold">Saldo disponible: ${product.availableBalance}</span>
                            <span className="text-2xl font-semibold">Saldo Contable: ${product.totalBalance}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-12 lg:col-12 xl:col-4 p-4">
                <div className="p-4 border-1 surface-border surface-card border-round">
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
                    <div className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center">Saldo contable</div>
                        <div className="text-2xl font-bold">${product.totalBalance}</div>
                    </div>
                    <div className="flex flex-column align-items-center gap-2 py-5">
                        <div className="text-2xl font-bold">
                            <Button label="Detalle" id={product.id} icon="pi pi-money-bill" size="small" rounded
                                    onClick={() =>
                                        navigate('detail', { state: product })
                                    }>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return listItem(product);
        else if (layout === 'grid')
            return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)}/>
            </div>
        );
    };


    return (
        <div>
            <BreadCrumb model={items} home={home}/>
            <div className="card">
                <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()}/>
            </div>
        </div>
    )
}

