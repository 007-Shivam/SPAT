import { Circles } from 'react-loader-spinner';
import './Loader.css';

export default function Loader() {
    return (
        <div className="loader-container">
            <Circles
                height="80"
                width="80"
                color="#b52222"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}