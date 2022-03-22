import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);
    const Aumentar = () => {
        setNumero(numero + 1)
    }
    const Disminuir = () => {
      setNumero(numero - 1)
    }
    return (
        <Fragment>
            <h3>Mi primer Componente {numero}</h3>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </Fragment>
    );
}
export default Contador;