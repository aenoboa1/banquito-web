import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
import {useNavigate} from "react-router-dom";

export const FormikFormDebtor = (monto) => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            id: '',
            account: '',
            email: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Nombre es requerido.';
            }

            if (!data.email) {
                errors.email = 'Email es requerido.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Email inválido E.g. example@email.com';
            }

            if (!data.id) {
                errors.id = 'Cédula es requerida.';
            }

            if (!data.account) {
                errors.account = 'Cuenta es requerida.';
            }
            return errors;
        },
        onSubmit: (data) => {

            setShowMessage(true);
            setFormData(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registro Exitoso!</h5>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombre Beneficiario*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Correo electrónico*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-id-card" />
                                <InputText id="id" name="id" value={formik.values.id} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('id') })} />
                                <label htmlFor="id" className={classNames({ 'p-error': isFormFieldValid('id') })}>Cédula*</label>
                            </span>
                            {getFormErrorMessage('id')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-wallet" />
                                <InputText id="account" name="account" value={formik.values.account} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('account') })} />
                                <label htmlFor="account" className={classNames({ 'p-error': isFormFieldValid('account') })}>Cuenta*</label>
                            </span>
                            {getFormErrorMessage('account')}
                        </div>
                              <input type="hidden" value={monto} name="hiddenField" />



                        <Button type="submit" label="Confirmar" className="mt-2"
                            onClick={() => {
                                navigate('',{state: monto});
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );

}
