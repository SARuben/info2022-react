import {fireEvent, render, waitFor} from '@testing-library/react'
import Busqueda from './Buscador';

const onBuscar = jest.fn();

const renderBuscador = () => {  
    const component = render(<Busqueda onBuscar={onBuscar} />);
    return(component);

}

describe('<Buscador />',() => {
    test('Debe renderizarse el Buscador', async () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument(true);
    });

    test('No se Llama a onBuscar cuando el usuario hace click en el boton buscar y el contenido < 3', async () =>{
        const component = renderBuscador();
        const button = component.getByRole('button');
        fireEvent.click(button)
        expect(onBuscar).not.toBeCalled();   
    })
    test('Llamar al buscador cuando el usuario hace click con el parametro requerido', async()=>{
        const component = renderBuscador()
        const button = component.getByRole('button');
        const input = component.getByRole('searchbox').querySelector('input');
        fireEvent.change(input, {target: {value:'test'}});
        fireEvent.click(button);
        waitFor(() => {
            expect(onBuscar).toBeCalledWith('test')
        });
    })


}

);