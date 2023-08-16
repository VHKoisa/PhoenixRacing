import './Stats.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardSubTitle
} from 'mdb-react-ui-kit';

const Stats = () => {
    return (
        <div className="stats">

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard className='h-100 img-fluid z-depth-1 wow zoomIn' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Cars</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>17</MDBCardSubTitle>
                            <MDBCardText>
                                Delivered on track
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Awards</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>22</MDBCardSubTitle>
                            <MDBCardText>on our name</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Generation</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>18</MDBCardSubTitle>
                            <MDBCardText>
                                years of excellence
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Stats;