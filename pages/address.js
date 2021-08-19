import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useState, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function Address() {
    const [address, setAddress] = useState('');
    const {user, setUser} = useContext(UserContext);
    const [coordinates, setCoordinates] = useState({lat: null, lng: null});

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };
    return (
        <>
            <Typography variant='h3'>Address Page</Typography>
            <div>Current address: {user.address}</div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <input {...getInputProps({placeholder: 'Type address'})}/>

                        <div>
                            {loading ? <div>...Loading</div>: null}
                            
                            {suggestions.map((suggestion) => {
                                
                                return (
                                    <div {...getSuggestionItemProps(suggestion)}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <Button 
                variant='contained' 
                color='primary' 
                onClick={() => setUser({...user, address: address, lat: coordinates.lat, lng: coordinates.lng})}
            >
                Submit
            </Button>
            <Button 
                variant='contained' 
                color='default'
            >
                <Link 
                    href='/summary'
                >
                    <a>Summary of reservation</a>
                </Link>
            </Button>
        </>
    )
}