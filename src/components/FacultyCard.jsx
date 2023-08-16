import './CrewCard.css';

const CrewCard = ({ name, position, mail, image }) => {
  return (
    <div className='crew-card'>
      <div className="img-content">
        <img className='profile' src={image} alt='Crew Profile' />
      </div>
      <div className="txt-content">
        <div className='name' href='destination_url'>{name}</div>
        <div className='position' href='destination_url'>{position}</div>
        <a href="mailto:example@example.com">
          {mail}
        </a>
      </div>
    </div>
  );
}
export default CrewCard;