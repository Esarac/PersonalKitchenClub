import React from 'react'

const THEMES = ['primary','secondary','success','danger','warning','info','light','dark','muted','white']

function Page ({
    children,
    theme
}){
    const checkTheme = THEMES.includes(theme) ?
    'page-'+theme : 'page';

    return(
        <div className={checkTheme}>
            <div className='pane d-flex flex-row align-items-center'>
                <div className='pane d-flex flex-column'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Page;