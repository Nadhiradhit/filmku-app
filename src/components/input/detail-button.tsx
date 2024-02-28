import React from 'react'

function DetailButon({children}: {children: React.ReactNode}) {
    return (
        <button data-item="button-detail" className="px-4 py-2 text-white font-semibold bg-orange-400 rounded-md hover:bg-orange-600 transition">
            {children}
        </button>
    )
}

export default DetailButon