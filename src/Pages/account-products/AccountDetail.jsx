import React, {useState, useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {AccountProductService} from "../../service/AccountProductService";
import async from "async";
import {useLocation} from "react-router-dom";

export default function AccountDetail() {
    const [transactions, setTransactions] = useState([]);
  /* 2. Get the param */
  const location = useLocation();
  const data = location.state;


    useEffect(() => {
        setTransactions(data.accountTransactions);
    }, []);

    return (
        <div className="card">
            <DataTable value={transactions} tableStyle={{minWidth: '50rem'}}>
                <Column field="date" header="Fecha"></Column>
                <Column field="reference" header="Descripción"></Column>
                <Column field="amount" header="Monto"></Column>
                <Column field="type" header="Tipo"></Column>
                <Column field="id" header="Código"></Column>
                <Column field="debtor" header="Destinatario"></Column>
                <Column field="balance" header="Saldo"></Column>
            </DataTable>
        </div>
    )
}