import './Faculty.css'
import FacultyCard from './FacultyCard'

const faculties = [
  {
    name: "Bade Mukund",
    image: "https://www.svnit.ac.in/web/department/Mechanical/images/Dr%20Bade%20Mukund.JPG",
    position: "Assisstant Professor, PHD",
    mail: "bmh@med.svnit.ac.in"
  },
  {
    name: "Rohan Pandey",
    image: "https://www.svnit.ac.in/web/department/Mechanical/images/rohan_rahul.jpg",
    position: "Assisstant Professor, PHD",
    mail: "rohanpande@med.svnit.ac.in"
  },
  {
    name: "Suresh Lakhimsetty",
    image: "https://www.svnit.ac.in/web/department/Electrical/images/suresh.jpg",
    position: "Assisstant Professor, PHD",
    mail: "suresh@eed.svnit.ac.in"
  }
]

const Faculty = () => {
  return (
    <div className='faculty'>
      <div className='faculty-heading'>Faculty Advisors</div>
      <div className='faculty-crew'>
        {
          faculties.map(({ image, name, position, mail }) => {
            return (
              <FacultyCard name={name} position={position} mail={mail} image={image} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Faculty;