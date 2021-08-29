import React,{useContext} from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const count = useContext(CategoryContext);


    return (
        <div>
            <h1>This is Shipment: {count}</h1>
        </div>
    );
};

export default Shipment;