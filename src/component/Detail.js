import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import EmailIcon from '@mui/icons-material/Email';
import CardContent from '@mui/material/CardContent';

function Detail() {
    return (
        <div className='container mt-3'>
            <h1>Welcome Arpit</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                <div className='add_btn'>
                                <button className='btn btn-warning mx-2'><EditIcon/></button>
                                <button className='btn btn-danger'><DeleteIcon/></button>
                            </div>
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name:<span>Arpit Dubey</span></h3>
                            <p className='mt-3'><EmailIcon />Email:<span>a@gmail.com</span></p>

                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12 ">
                            
                            <h3 className='mt-3'>Name:<span>Arpit Dubey</span></h3>
                            <p className='mt-3'><EmailIcon />Email:<span>a@gmail.com</span></p>

                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Detail