import { useEffect } from 'react';
import {  Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useParams } from 'react-router-dom';
import {getCat} from '../redux/catsSlice'

interface ICatPageProps{
    id: string;
}

const CatPage:React.FC = () => {
    const dispatch = useDispatch();
    let {id} = useParams<ICatPageProps>();    
    const cat = useSelector((state:any) => state.catsSlice.cat);
    const catError = useSelector((state:any) => state.catsSlice.error);
    const breedId = useSelector((state:any) => state.breedsSlice.breed);

    useEffect(()=>{
        dispatch(getCat({id}))                         
        console.log(catError);
                
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    
    return (
        <div className="cat">
            <Container>
                {
                    catError && <div>{catError.message}</div>
                }
                {cat.breeds.length !== 0 &&
                    <Card >
                        <Card.Header>
                            <Link to={`/?breed=${breedId}`}>
                                <Button variant="primary">Back</Button>
                            </Link>
                        </Card.Header>
                        <Card.Img variant="top" src={cat.url} />
                        <Card.Body>
                            <Card.Title>{cat.breeds[0].name}</Card.Title>
                            <h5>Origin: {cat.breeds[0].origin}</h5>
                            <h6>Origin: {cat.breeds[0].temperament}</h6>
                            <Card.Text>
                            {cat.breeds[0].description}
                            </Card.Text>                
                        </Card.Body>
                    </Card>
                }
                
            </Container>
        </div>
    );
};

export default CatPage;