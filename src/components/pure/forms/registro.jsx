import React, {useState} from "react";
import {Divider} from 'primereact/divider';
import {Button} from 'primereact/button';
import {Image} from 'primereact/image';
import banc from "./../../../assets/banc.jpg";
import ReactDOM from 'react-dom';
import {Field, Form, Formik} from 'formik';


export default function Registro() {
    const [value, setValue] = useState('');


    return (


        <div className="card flex justify-content-center contex">
            <Formik
                initialValues={{
                    email: '',
                    cedula: '',
                    user: '',
                    password: '',
                    passwordcon: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <div className="flex flex-column md:flex-row md:w-50rem">
                    <div className="w-full md:w-4 flex align-items-center justify-content-center py-4">
                        <table class="default">
                            <tr>
                                <td><Image src={banc} alt="Image" width="650"/></td>
                            </tr>
                            <tr>
                                <p className="align-items-center justify-content-center py-4">Cultivando tus sueños,
                                    construyendo tu futuro</p>
                            </tr>
                        </table>
                    </div>
                    <div className="w-full md:w-3">
                        <Divider layout="horizontal" className="flex md:hidden" align="center">
                            <b></b>
                        </Divider>
                    </div>
                    <Form>
                        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-11">
                            <div className="text-center mb-5">
                                <img src={banc} alt="hyper" height={50} className="mb-3"/>
                                <div className="text-900 text-3xl font-medium mb-3">Registro</div>
                                <span className="text-600 font-medium line-height-3">Tienes una cuenta?</span>
                                <a  href={"/"} className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Ingreso</a>
                            </div>
                            <div>

                                <label htmlFor="email" className="block text-900 font-medium mb-2">Correo</label>
                                <Field id="email" name="email" type="text" placeholder="Ingresa tu Correo"
                                       className="w-full mb-3 texts"/>
                                <table class="default">
                                    <tr>
                                        <td>
                                            <label htmlFor="cedula" className="text-900 font-medium mb-2">Cedula</label>
                                            <Field id="cedula" name="cedula" type="text" placeholder="Ingresa tu Cedula"
                                                   className="w-full mb-3 texts"/>
                                        </td>
                                        <td>
                                            <label htmlFor="user" className=" text-900 font-medium mb-1">Usuario</label>
                                            <Field id="user" name="user" type="text" placeholder="Ingresa un Usuario"
                                                   className="w-full mb-3 texts"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="password"
                                                   className="block text-900 font-medium mb-2">Contraseña</label>
                                            <Field id="password" name="password" type="password"
                                                   placeholder="Contraseña" className="w-full mb-3 texts"/>
                                        </td>
                                        <td>
                                            <label htmlFor="passwordcon" className="block text-900 font-medium mb-2">Validacion
                                                Contraseña</label>
                                            <Field id="passwordcon" name="passwordcon" type="password"
                                                   placeholder="Ingrese nuevamente" className="w-full mb-3 texts"/>
                                        </td>
                                    </tr>
                                </table>
                                <div className="flex align-items-center justify-content-between mb-6">
                                    <div className="flex align-items-center">
                                        <label htmlFor="rememberme"></label>
                                    </div>
                                </div>
                                <Button label="Registro" icon="pi pi-user-plus" className="w-full"/>
                            </div>
                        </div>

                    </Form>

                </div>
            </Formik>
        </div>
    )
}


ReactDOM.render(<Registro/>, document.getElementById('root'));