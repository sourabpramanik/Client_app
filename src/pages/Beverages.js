import React from 'react'

export default function Beverages({open}) {
    return (       
        <div>
            {open===3?
                <h1>
                    Beverages
                </h1>
                :
                null
            }
        </div>
    )
}
