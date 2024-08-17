import React from "react";


const SpinLoader = () => {
 
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '340px' }}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default SpinLoader;
