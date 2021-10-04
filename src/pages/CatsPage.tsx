import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTimeout } from 'timers';
import { getBreeds,IBreed,setBreed } from '../redux/breedsSlice';
import {ICat,getCats} from '../redux/catsSlice'
import queryString from 'query-string'

const CatsPage:React.FC = () => { 
    const dispatch = useDispatch();
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);    
    const [buttonDisabled,setButtonDisabled] = useState(true);    
    const [selectedBreed,setSelectedBreed] = useState<any>(parsed.breed);    
    const [currentPage,setCurrentPage] = useState(0);    
    const [buttonText,setButtonText] = useState("Load more");    
    const breeds = useSelector((state:any) => state.breedsSlice.breeds);
    const cats = useSelector((state:any) => state.catsSlice.cats);

    

    const loadCats = (breedId:string,page:number) => {
        setButtonText("Loading cats...");
       
        setTimeout(()=>{            
            setSelectedBreed(breedId)
            setCurrentPage(1)
            dispatch( getCats({"breedId":breedId,"page":1}) )
            setButtonDisabled(false)        
            setButtonText("Load more");

            dispatch(setBreed({"id":breedId}))
        },1500)
    }

    const onChangeBreed = (e:React.ChangeEvent<HTMLSelectElement>) =>{       
        let breedId = e.target.value;
        loadCats(breedId,1)
    }

    const loadMore = () =>{  
        setButtonDisabled(true) 
        let newPage = currentPage+1;
        loadCats(selectedBreed,newPage)
        
    }

    useEffect(() => {
        dispatch(getBreeds())            
        
        if(selectedBreed !== undefined)       
            loadCats(selectedBreed,1)        
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="home">
            <Container>
                <h1>Cat Browser</h1>
                <Row className="cats_form">
                    <Col sm={6} md={3}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Breed</Form.Label>
                                
                                <Form.Select aria-label="Default select example" defaultValue={selectedBreed}  onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>onChangeBreed(e)}> 
                                    <option>Select breed</option>
                                    {
                                        breeds && breeds.map((breed: IBreed,index:number)=>(
                                            <option key={index}  value={breed.id}>{breed.name}</option>
                                        ))
                                        
                                    }
                                    
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>                    
                        {
                            cats.length !== 0 ? 
                            cats.map((cat: ICat,index:number) => (
                                <Col md={3} sm={6} xs={12} key={index}>
                                    <Card >
                                        <Card.Img variant="top" src={cat.url} />
                                        <Card.Body>                                                
                                            <Link to={`/${cat.id}`} >
                                                <Button className="btn-block" variant="primary" size="lg" >View Details</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>                                       
                                </Col>
                            )): <div className="no_cats">No cats available</div>
                        }                               
                </Row>

                <Row>                    
                    <Col>
                    <br/>
                        <Button variant="success" onClick={() => loadMore()} disabled={buttonDisabled}>{buttonText}</Button>
                    </Col>
                </Row>
                
                
            </Container>
        </div>
    );
};

export default CatsPage;
