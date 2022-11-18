import React from 'react'
import axios from 'axios';
import { useEffect, useRef } from 'react';
import {  useNavigate  } from 'react-router-dom';
import {gsap} from 'gsap';
import { Paper, Card, Button, Typography, Divider } from '@mui/material';
import PlantModal from './PlantModal';

const PlantList = (props) => {
    const { removeFromDom } = props;
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const navigate = useNavigate();

    const card = useRef();
    useEffect(() => {
        gsap.from(".card", {duration:1, opacity:0,x: "random(-200,200)" , y: "random(-200, 200)", stagger: 0.15});
       
    })
    //gsap.from(".plantCard", {duration:1, opacity:0, y: "random(-200, 200)", stagger: 0.25});
    //gsap.from(".plantCard", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});

    const deletePlant = (plantId) => {
        axios.delete('http://localhost:8000/api/plants/' + plantId)
            .then(res => {
                removeFromDom(plantId)
            })
            .catch(err => console.error(err));
    }
    
    const plantForm = () => {
        navigate('/plants/new')
    }
    
    
    return (
        <div>
            <Paper elevation={18}>
                <Typography variant='h4' style={{marginLeft: '2%'}}><strong>Branch & Soil</strong></Typography>
                <Button style={{ backgroundColor: '#009900', display: 'block', marginLeft: '2%', color: '#f0f0f0', marginBottom: '2%' }} onClick={plantForm}>Add Plant</Button>
            </Paper>
            

            {days.map((day, idx) => {
                return (
                    
                    <Card className='card' ref={card} key={idx} elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                        <Typography variant='h4' style={{ color: '#009900', textTransform: 'capitalize', textAlign: 'center' }}>{day}</Typography>
                        <Divider />
                        {props.plants.filter(plant => (plant[day] === true)).map((plant, i) => {
                            
                            return (
                                <div key={i}>
                                    <Typography variant='h6' style={{textAlign:'center', marginTop: '5%'}} >{plant.name} : {plant.water} gal(s)</Typography>
                                    <Button style={{color: '#007500'}}  onClick={(e) => { deletePlant(plant._id) }}>Delete</Button> 
                                    <span style={{color: '#00aa00', marginLeft: '3%'}}>||</span>
                                    <Button style={{color: '#007500', marginLeft: '3%'}} underline= "hover" onClick ={() => navigate(`/plants/${plant._id}`)}>Edit </Button>
                                    <PlantModal plant={plant}/>                                   
                                       <Divider />                                    
                                </div>
                            )
                        })}
                    </Card>
                )
            })}
            {/* <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Tuesday</Typography>
                {props.plants.filter(plant => (plant.tuesday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card> */}

            {/* <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Wenesday</Typography>
                {props.plants.filter(plant => (plant.wednesday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card>

            <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Thursday</Typography>
                {props.plants.filter(plant => (plant.thursday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card>

            <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Friday</Typography>
                {props.plants.filter(plant => (plant.friday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card>

            <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Saturday</Typography>
                {props.plants.filter(plant => (plant.saturday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card>

            <Card elevation={18} style={{ marginBottom: '2%', width: '15%', display: 'inline-block', marginLeft: '2%', padding: '2%' }}>
                <Typography variant='h4' style={{ color: '#009900' }}>Sunday</Typography>
                {props.plants.filter(plant => (plant.sunday === true)).map((plant, i) => {
                    return (
                        <div>
                            <Typography variant='h6' >{plant.name} : {plant.water} gal(s)</Typography>
                            <Button style={{ backgroundColor: '#2a2a2a', color: 'white' }} onClick={(e) => { deletePlant(plant._id) }}>
                                Delete
                            </Button>
                            <Link style={buttonStyle} to={`/plants/${plant._id}`} key={i}>View Plant</Link>
                            <Divider />
                        </div>
                    )
                })}
            </Card> */}


        </div >
    )
}
export default PlantList;




