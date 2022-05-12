import { useFormikContext } from "formik";
import React, { ChangeEvent, useState } from "react";

export default function FormGroupImagen(props: formGroupImagenProps) {

    const divStyle = { marginTop: '10px' }
    const imgStyle = { width: '450px' }

    const [imagenBase64, setImagenBase64] = useState('');
    const [imagenUrl, setImagenUrl] = useState(props.imagenUrl);

    const { values } = useFormikContext<any>();

    const manejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((repBase64: string) => setImagenBase64(repBase64))
                .catch(error => console.log(error))

            values[props.campo] = archivo;
            setImagenUrl('')
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((reesolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => reesolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png"
                    onChange={manejarOnChange} />
            </div>
            {imagenBase64 ?
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenBase64} alt="imagenSeleccionada" />
                </div> : null}

            {imagenUrl ?
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenUrl} alt="imagenSeleccionada" />
                </div> : null}
        </div>
    )
}

interface formGroupImagenProps {
    campo: string;
    label: string;
    imagenUrl: string;
}

FormGroupImagen.defaultProps = {
    imagenUrl: ''
}