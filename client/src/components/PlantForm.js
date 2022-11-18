import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, Paper, Button, Checkbox, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';

const PlantForm = (props) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [water, setWater] = useState("");
    const [notes, setNotes] = useState("");
    const [link, setLink] = useState("");

    const [monday, setMonday] = useState(true);
    const [tuesday, setTuesday] = useState(true);
    const [wednesday, setWednesday] = useState(true);
    const [thursday, setThursday] = useState(true);
    const [friday, setFriday] = useState(true);
    const [saturday, setSaturday] = useState(true);
    const [sunday, setSunday] = useState(true);
    const navigate = useNavigate();

    const days = [['monday', setMonday], ['tuesday', setTuesday], ['wednesday', setWednesday], ['thursday', setThursday], ['friday', setFriday], ['saturday', setSaturday], ['sunday', setSunday]]
    
    //const [errors, setErrors] = useState([]);
    const card = useRef();
    useEffect(() => {
        gsap.from(".card", { duration: .75, opacity: 0, x: "random(-50,50)", y: "random(-50, 50)" });
    },[])

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { borderColor: "#e77614", scale: 1.05 });
      };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { borderColor: "#28a92b", scale: 1 });
      };

    const onSubmitHandler = e => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/plants', {
            name,
            water,
            notes,
            link,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
        })
            .then(res => {
                
                navigate('/plants/')

                console.log(res)

            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                //setErrors(errorArr);
            })

        setName("");
        setWater("");
        setNotes('');
        setLink("");
        setMonday("");
        setTuesday(true);
        setWednesday(true);
        setThursday(true);
        setFriday(true);
        setSaturday(true);
        setSunday(true);


    }

    const allPlants = () => {
        navigate('/plants/')
    }

    return (
        <div>
            <Paper elevation={18}  >
                <Typography variant='h4' style={{ marginLeft: '2%', marginTop: '1%' }}><strong>Branch & Soil</strong></Typography>
                <Button style={{ backgroundColor: '#009900', display: 'block', marginLeft: '2%', color: '#f0f0f0', marginBottom: '2%' }} onClick={allPlants}>All Plants</Button>
            </Paper>
            <div style={{ marginLeft: '30%', marginTop: '5%', width: '55%' }}>

                <Paper elevation={13} style={{ width: '75%' }} className='card' ref={card} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <form onSubmit={onSubmitHandler} style={{ color: '#f0f0f0' }}>

                    

                        <FormControl style={{ marginBottom: '2%' }}>
                            <InputLabel htmlFor="my-input">Plant Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setName(e.target.value)} value={name} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text">Be technical or give it a nickname</FormHelperText>
                        </FormControl>

                        <FormControl style={{ marginBottom: '2%' }}>
                            <InputLabel htmlFor="my-input3">Water Amount</InputLabel>
                            <Input id="my-input3" aria-describedby="my-helper-text3" onChange={(e) => setWater(e.target.value)} value={water} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text3">How much H2O per day?</FormHelperText>
                        </FormControl>

                        <FormControl style={{ marginBottom: '2%', marginLeft: '3%' }}>
                            <InputLabel htmlFor="my-input2">Notes</InputLabel>
                            <Input id="my-input2" aria-describedby="my-helper-text2" onChange={(e) => setNotes(e.target.value)} value={notes} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text2">Things to remember</FormHelperText>
                        </FormControl>
                        <Divider />

                       

                        {days.map((day, idx) => {
                            return (
                                <FormControl key={idx} style={{ display: 'block', marginBottom: '2%' }}>
                                    <Checkbox color="success" onChange={(e) => day[1](e.target.checked)} defaultChecked />
                                    <label style={{ textTransform: 'capitalize' }}>{day[0]}</label>
                                </FormControl>)
                        })}

                        {/* <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setMonday(e.target.checked)}/>
                        <label>Monday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setTuesday(e.target.checked)}/>
                        <label>Tuesday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setWednesday(e.target.checked)}/>
                        <label>Wednesday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setThursday(e.target.checked)}/>
                        <label>Thursday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setFriday(e.target.checked)}/>
                        <label>Friday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setSaturday(e.target.checked)}/>
                        <label>Saturday</label>
                    </FormControl>

                    <FormControl style={{display: 'block',  marginBottom: '2%' }}>
                        <Checkbox  defaultChecked color="success" onChange={(e) => setSunday(e.target.checked)}/>
                        <label>Sunday</label>
                    </FormControl> */}


                        <div style={{ marginLeft: '40%', marginRight: "33%", paddingBottom: "5%" }}>
                            <Button style={{ backgroundColor: '#009900', color: '#f0f0f0' }} type="submit" variant="contained">Create</Button>
                        </div>
                    </form>
                </Paper>
            </div>

        </div>
    );
}
export default PlantForm

