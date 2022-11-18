import React from 'react'
import { Box, Button, Modal, Typography, Backdrop } from '@mui/material'


const PlantModal = (props) => {

    const style = {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button style={{ color: '#009900' }} onClick={handleOpen}>Plant Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}

            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" style={{ color: '#009900' }}>
                        {props.plant.name}<hr/>
                    </Typography>
                    <Typography variant='h5' sx={{ mt: 2 }} >
                        Notes: {props.plant.notes}<br />
                        Water: {props.plant.water} gallon(s),<br />
                        Monday: {props.plant.monday ? "Yes"  : "No"},<br />
                        Tuesday: {props.plant.tuesday ? "Yes" : "No"},<br />
                        Wednesday: {props.plant.wednesday ? "Yes" : "No"},<br />
                        Thursday: {props.plant.thursday ? "Yes" : "No"},<br />
                        Friday: {props.plant.friday ? "Yes" : "No"},<br />
                        Saturday: {props.plant.saturday ? "Yes" : "No"},<br />
                        Sunday: {props.plant.sunday ? "Yes" : "No"}<br />

                    </Typography>
                    
                </Box>
            </Modal>
        </div>
    )
}

export default PlantModal