import {UstState, useState} from 'react'
import './Items.css'
const number = [1,2,3,4,5,6,6,7,8,9]

function Items() {
    return ( 
        <div> 
            {number.map((i) => (
                <div className="Items">
                {i === 1 || i === 3 ? <div style={{marginTop: '0rem'}} className="red">ToDoItems {i}</div> : <div>ToDoItems {i}</div>}
              </div>
             
        ))}
        </div>
    
    );

}

export default Items;