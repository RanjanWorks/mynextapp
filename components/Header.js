import React from 'react';
import Link  from 'next/link'

function header() {
    return(
    <div className="header">
        <p>logo</p>
        <nav>
<Link href="/">Home</Link>
<Link href="/About">About</Link>
<Link href="/Contact">Contact</Link>
<Link href="/Pricing">Pricing</Link>
        </nav>
    </div>
    )
}

export default header;