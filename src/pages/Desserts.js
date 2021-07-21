import React from 'react'

export default function Desserts({open}) {
    return (        
        <div>
            {open===4?
                <h1>
                  Desserts
                </h1>
                :
                null
            }
        </div>
    )
}
