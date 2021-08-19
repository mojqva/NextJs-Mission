import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import GoogleMapReact from 'google-map-react';


export default function Summary(){
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const {user} = useContext(UserContext);
    const mapProps = {
        center: {
            lat: user.lat,
            lng: user.lng
        },
        zoom: 13
    }
    return (
        <>
            <Typography variant='h3'>Summary Page</Typography>
            <div>
                <p>Checkin datetime: {user.checkIn}</p>
                <p>Checkout datetime: {user.checkOut}</p>
                <p>Reservation address: {user.address}</p>
            </div>
            <Button variant='contained' color='secondary'>Confirm the reservation</Button>
            <Button variant='contained' color='default'><Link href='/'>Create new reservation</Link></Button>
            <div style={{height: '500px', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDiTe83cD8wV2ln9FFqkToJlLLF-zPH-xo' }}
                    defaultCenter={mapProps.center}
                    defaultZoom={mapProps.zoom}
                >
                    <AnyReactComponent
                        lat={mapProps.center.lat}
                        lng={mapProps.center.lng}
                        text="❌"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}