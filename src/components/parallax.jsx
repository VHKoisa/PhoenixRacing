import { Parallax, Background } from 'react-parallax';

const MakeParallax = ({imageUrl}) => {
    return (
        <>
        <Parallax strength={500}>
            <Background className="custom-bg">
                <div style={{ width: '100vw', height: '90vh', backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover',position:'relative',backgroundPosition: '50% 50%', textAlign: 'center', objectFit: 'cover' }} />
            </Background>
            <div style={{ height: '80vh', width: '100vw' }} />
        </Parallax>
        </>
    )
}

export default MakeParallax;