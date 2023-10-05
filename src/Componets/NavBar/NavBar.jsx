import React, { useContext } from 'react'
import {list} from '../../App'

function NavBar() {

    const lists = useContext(list);
  return (
    <div>
        <ul className='navbar-nav'>
        
            {
                lists.map((ne)=>{
                    return(
                        <li className='p-3'>
                            {
                                ne
                            }
                        </li>
                    )
                })   
            }

        </ul>
    </div>
  )
}

export default NavBar
