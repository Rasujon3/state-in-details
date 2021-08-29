import React,{useContext} from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category,setcategory] = useContext(CategoryContext);


    return (
        <div>
            <h1>This is Shipment: {category}</h1>
            <button onClick={()=>setcategory(category+1)}>Increment from Category</button>
        </div>
    );
};

export default Shipment;