import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, Paper, Button, Checkbox, Typography } from '@mui/material';
import { gsap } from 'gsap';


const Update = (props) => {
    const { id } = useParams()
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
    const days = [['monday', setMonday], ['tuesday', setTuesday], ['wednesday', setWednesday], ['thursday', setThursday], ['friday', setFriday], ['saturday',setSaturday], ['sunday', setSunday]]

    const card = useRef();
    // useEffect(() => {
    //     gsap.from(".card", {duration: 1.5, opacity: 0, scale: 0.1, ease: "back"}); 
    // })

    //const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/plants/' + id)
            .then(res => {
                setName(res.data.name);
                setWater(res.data.water);
                setNotes(res.data.notes);
                setLink(res.data.link);
                setMonday(res.data.monday);
                setTuesday(res.data.tuesday);
                setWednesday(res.data.wednesday);
                setThursday(res.data.thursday);
                setFriday(res.data.friday);
                setSaturday(res.data.saturday);
                setSunday(res.data.sunday);

            })
        gsap.from(".card", { duration: .75, opacity: 0, x: "random(-50,50)", y: "random(-50, 50)" });
        //gsap.from(".card", {duration: 1, opacity: 0, scale: 0.1, ease: "back"});
        //gsap.from('.card', {duration: 1.5, ease: "elastic.in", y: 200});
        // gsap.to(".card", { 
        //     rotation: 360,
        //     x: '100vw',
        //     xPercent: -100,
        //     // special properties
        //     duration: 1.5, // how long the animation lasts
        //     repeat: 1, // the number of repeats - this will play 3 times
        //     yoyo: true,
        //this will alternate back and forth on each repeat. Like a yoyo
        // });
    }, [id]);

    const onSubmitHandler = e => {

        e.preventDefault();

        axios.put('http://localhost:8000/api/plants/' + id, {
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
                //navigate(`/plants/${res.data._id}`);
                navigate('/plants/')
                console.log(res)

            })
            .catch(err => {
                console.log(err)
                // const errorResponse = err.response.data.errors;
                // const errorArr = [];
                // for (const key of Object.keys(errorResponse)) {
                //     errorArr.push(errorResponse[key].message)
                // }
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
            <Paper elevation={18}>
                <Typography variant='h4'><strong>Branch & Soil</strong></Typography>
                <Button style={{ backgroundColor: '#009900', display: 'block', marginLeft: '2%', color: '#f0f0f0', marginBottom: '2%' }} onClick={allPlants}>All Plants</Button>
            </Paper>
            <div style={{ marginLeft: '20%', marginRight: '20%', marginTop: '8%', width: '55%' }}>

                <Paper elevation={18} style={{ width: '75%' }} className='card' ref={card}>
                    <form onSubmit={onSubmitHandler} style={{ color: '#f0f0f0' }}>

                        <FormControl style={{ marginBottom: '2%' }}>
                            <InputLabel htmlFor="my-input">Plant Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setName(e.target.value)} value={name} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text">Be technical or give it a nickname</FormHelperText>
                        </FormControl>

                        <FormControl style={{ marginBottom: '2%' }}>
                            <InputLabel htmlFor="my-input3">Water Amount</InputLabel>
                            <Input id="my-input3" aria-describedby="my-helper-text3" onChange={(e) => setWater(e.target.value)} value={water} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text3">How much per day?</FormHelperText>
                        </FormControl>

                        <FormControl style={{ marginBottom: '2%', marginLeft: '3%' }}>
                            <InputLabel htmlFor="my-input2">Notes</InputLabel>
                            <Input id="my-input2" aria-describedby="my-helper-text2" onChange={(e) => setNotes(e.target.value)} value={notes} />
                            <FormHelperText style={{ color: '#009900' }} id="my-helper-text2">things to remember</FormHelperText>
                        </FormControl>


                        {days.map((day, idx) => {
                            return (
                                <FormControl key={idx} style={{ display: 'block', marginBottom: '2%' }}>
                                <Checkbox color="success" onChange={(e) => day[1](e.target.checked)}  />
                                <label style={{ textTransform: 'capitalize' }}>{day[0]}</label>
                            </FormControl>)
                        })}

                        <div style={{ marginLeft: '40%', marginRight: "33%", paddingBottom: "5%" }}>
                            <Button style={{ backgroundColor: '#009900', color: '#f0f0f0', display: 'inline-block' }} type="submit" variant="contained">Edit</Button>
                           
                        </div>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default Update;