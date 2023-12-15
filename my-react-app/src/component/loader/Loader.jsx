import './Loader.css';
function Loader({ texto = "default",color }) {
    return (
        <div className="container">
            <div className='row text-center'>
                <div className="col">
                    <div className="lds-spinner"><div></div><div></div><div></div><div>
                    </div><div></div><div></div><div></div><div></div><div></div><div>
                        </div><div></div><div></div></div>
                    <p>{texto}</p>
                    <p>{color}</p>
                </div>
            </div>
        </div>
    )
}

export default Loader;