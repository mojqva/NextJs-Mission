import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Signup from '../components/Signup';

export default function Index(){
    return (
        <>
            <Typography variant='h3'>Index Page</Typography>
            <Signup />
            <Button 
                variant='contained' 
                color='default'
            >
                <Link 
                    href='/address'
                >
                    <a>Select address</a>
                </Link>
            </Button>
        </>
    )
}