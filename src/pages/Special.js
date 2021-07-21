import React from 'react'

export default function Special({open}) {
    return (
        <div>
            {open===1?
                <h1>
                    Special
                </h1>
                :
                null
            }
        </div>
    )
}
