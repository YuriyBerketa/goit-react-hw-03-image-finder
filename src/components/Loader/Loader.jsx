import './Loader.css';
import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div className="Spinner">
            <FidgetSpinner
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
        </div>
    );
};
