import React, {Fragment} from 'react';

const Jsx = () => {
    // const saludo = "Holaaa!!"
    const temperatura = 21;
    return (
        <Fragment>
            <h2>Frio o Calor</h2>
            <h4>
                {
                    temperatura > 20 ? 'Calor': 'Frio'
                }
            </h4>
        </Fragment>
    );
}
export default Jsx;