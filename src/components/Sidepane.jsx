import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import React, { useState} from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



function Sidepane() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    
    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={() => this.props.onAboutClicked()} label="About" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Button label="Know me better" icon="pi pi-align-justify" 
                onClick={() => setVisibleLeft(true)} 
                className="p-mr-2" 
                style={{ "background": "#2A323D" ,"color":"#E3E4E6","border":"#E3E4E6", "padding": "1.5em"}}/>
            </div>
        </div>
    )
    
}

export default Sidepane;