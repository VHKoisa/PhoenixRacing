import React from "react";
import Card from "./card";
import alumni from "./data";
import "./alumni.css";


const alumni2025 = [
  {
    "name": "Jignesh Barad",
    "image": "https://drive.google.com/uc?export=view&id=1mcbN-wP6UAqy1t2quf73JvC8Q3bpncWO",
    "position": "Assistant Manager",
    "company": "Adani Total Gas Ltd",
    "year": "2022",
    "text": "https://www.linkedin.com/in/jignesh-barad-9424a71a6"
  },
  {
    "name": "Oorja Dorkar",
    "image": "https://drive.google.com/uc?export=view&id=1J8WGKxa27h93T7OWdr4GLrVBcYWXy3Gz",
    "position": "Assistant Manager",
    "company": "Bajaj Auto Limited",
    "year": "2022",
    "text": "https://www.linkedin.com/in/oorja-dorkar-04b365179"
  },
  {
    "name": "Siddharthkumar B Zadafiya",
    "image": "https://drive.google.com/uc?export=view&id=13DoW_MMBRKiH_BnMyZmDCIxn0T9ENmKt",
    "position": "Executive Sr. Engineer",
    "company": "Larsen & Toubro Defence ",
    "year": "2022",
    "text": "https://www.linkedin.com/in/siddharthkumarzadafiya/"
  },
  {
    "name": "Savai Thakkar",
    "image": "https://drive.google.com/uc?export=view&id=1xVquIIZda7GCgm6m08aZkdRM19XYVEol",
    "position": "Pursuing MBA",
    "company": "IIM Bangalore",
    "year": "2021",
    "text": "https://www.linkedin.com/in/savai-thakkar-921610176"
  },
  {
    "name": "Dhola Nikunj",
    "image": "https://drive.google.com/uc?export=view&id=19tv5G_9z0VVMGofTOfHvTUuefd5Qvdpb",
    "position": "Jewellery Business",
    "year": "2022",
    "text": "http://linkedin.com/in/nikunj-dhola-5672751b5"
  },
  {
    "name": "Hemish Gangajaliya",
    "image": "https://drive.google.com/uc?export=view&id=16rKrNnIDxx0djkAunh5b303r_2FwVzTA",
    "position": "Family Business",
    "company": "Jay Agro Engineering ",
    "year": "2021",
    "text": ""
  },
  {
    "name": "Mihir Panchal",
    "image": "https://drive.google.com/uc?export=view&id=1Z-hed2ZG6AE--vvRe_n_6MIISEI7dAjB",
    "position": "Job",
    "company": "Bic cello pvt Ltd",
    "year": "2021",
    "text": "https://www.linkedin.com/in/mihir-panchal-693b40172"
  },
  {
    "name": "Nikunj Hiteshkumar Dave",
    "image": "https://drive.google.com/uc?export=view&id=1s06QuwHiBb3y-zqD7YuRKEdd-dEQjqsk",
    "position": "Executive Trainee",
    "company": "HMSI",
    "year": "2023",
    "text": "https://www.linkedin.com/in/nikunj9"
  },
  {
    "name": "Kurvesh Darji",
    "image": "https://drive.google.com/uc?export=view&id=1zU4jTh5lZ9VSZ-bOSqDfA6bolps-sNq3",
    "position": "Msc Aerospace engineering.",
    "company": "Technical university of Darmstadt",
    "year": "2021",
    "text": "https://www.linkedin.com/in/kurvesh-darji-a90b72179"
  },
  {
    "name": "Tirth Lodhiya",
    "image": "https://drive.google.com/uc?export=view&id=1yCxmus87E-f783F2KRQairWLso3j5wnT",
    "position": "Job",
    "company": "Bharat Electronics Ltd",
    "year": "2022",

    "text": "https://www.linkedin.com/in/lodhiyatirth"
  },
  {
    "name": "Ayush Jain",
    "image": "https://drive.google.com/uc?export=view&id=1ZufnEEOaXDmDkK62UzTH0mVP4vRF62y1",
    "position": "Business Analyst",
    "company": "Effiya Technologies",
    "year": "2022",
    "text": "https://www.linkedin.com/in/ayush-jain-a48291185"
  },
  {
    "name": "Jhalak Gandhi",
    "image": "https://drive.google.com/uc?export=view&id=11xhzhXPnUI8HERxH6qBuH0OeEzBke91W",
    "position": "Supply Chain Materials Engineer",
    "company": "STAAR Surgical",
    "year": "2018",
    "text": "https://www.linkedin.com/in/jhalak-gandhi-701267123"
  },
  {
    "name": "Akash Ravindra Kolhe",
    "image": "https://drive.google.com/uc?export=view&id=1VHHJm_Ajge8NkxczBlTrvAa_T4hOJFZ0",
    "position": "Mechanical Design Engineer",
    "company": "Tesla",
    "year": "2020",
    "text": "linkedin.com/in/akashrkolhe/"
  },
  {
    "name": "K Vamsi",
    "image": "https://drive.google.com/uc?export=view&id=1DWuipXCRx8ZBERBETBs8iW7EdWU82DCG",
    "position": "MTech-Robotics and Mobility Systems",
    "company": "IIT JODHPUR ",
    "year": "2021",
    "text": ""
  },
  {
    "name": "Shaan Polra",
    "image": "https://drive.google.com/uc?export=view&id=12B5HOqRHQUAFmkUGHF929cWhMw6WpSm1",
    "position": "Pursuing Master degree",
    "company": "The University of Adelaide",
    "year": "2022",
    "text": "https://www.linkedin.com/in/shaan-polra/"
  },
  {
    "name": "HANS RAJ PANWAR",
    "image": "https://drive.google.com/uc?export=view&id=1Iihjdv1iJGf5-nx-aQsRmRJSmVZYSh4Z",
    "position": "Manager- Automobile Manufacturing",
    "company": "MG Motor India Pvt Ltd.",
    "year": "2018",
    "text": "https://www.linkedin.com/in/hans-raj-panwar-7a38221a9"
  },
  {
    "name": "Daksharajsinh Jadeja",
    "image": "https://drive.google.com/uc?export=view&id=1ZcZ5WIR7BFMDd_D25av-ZGK5Z7zRyTdc",
    "position": "Job",
    "company": "Maruti Suzuki India Limited",
    "year": "2018",
    "text": "https://www.linkedin.com/in/daksharaj-jadeja-56266315a/"
  },
  {
    "name": "Arman Mansuri",
    "image": "https://drive.google.com/uc?export=view&id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut",
    "position": "Product Manager",
    "company": "Couche Tard",
    "year": "2020",
    "text": "https://drive.google.com/uc?export=view&id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut"
  },
  {
    "name": "Avnish Dholakiya",
    "image": "https://drive.google.com/uc?export=view&id=1tzJbLvLL4HUW4dZeMuL7V9o8KPOBLcGK",
    "position": "MT",
    "company": "Pidilite Industries Ltd",
    "year": "2019",
    "text": "https://www.linkedin.com/in/avnish-dholakiya"
  },
  {
    "name": "Amol Shinde",
    "image": "https://drive.google.com/uc?export=view&id=1PmG2xTH9ZB4ZQ6Ch98PqB-MNHNVKmxUG",
    "position": "Senior Manager",
    "company": "Montra electric ",
    "year": "2017",
    "text": "https://www.linkedin.com/in/amol06shinde"
  },
    {
        "name": "Shubham Pandey",
        "image": "https://drive.google.com/uc?export=view&id=13UDK5LkxOTrKaY0vcl_LOU9bGzU2wcZz",
        "position": "Analyst",
        "company": "Deloitte",
        "year": "2023",
        "text": "http://linkedin.com/in/shubham-kumar-pandey-3a46b21b3"
    },
    {
        "name": "Tejas Agrawal",
        "image": "https://drive.google.com/uc?export=view&id=16k7SZnONGjHN-d3DQLgBGRWKzx5W7W9d",
        "position": "Job",
        "company": "United Phosphorus Limited",
        "year": "2023",
        "text": "https://www.linkedin.com/in/tejas-agrawal-57a5951b7"
    },
    {
        "name": "Shubham Lohar",
        "image": "https://drive.google.com/uc?export=view&id=1jXrD_31RCeCV6963BX6KwsnHalkUIEhe",
        "position": "Design Engineer",
        "company": "John Deere",
        "year": "2023",
        "text": "https://www.linkedin.com/in/shubham-lohar"
    },
    {
        "name": "Dhruvil Rakeshbhai Patel",
        "image": "https://drive.google.com/uc?export=view&id=1NBb6MmyrD6PFa9cGUdxMszBnSVdtI3S4",
        "position": "Engineer Trainee",
        "company": "UPL",
        "year": "2023",
        "text": "https://www.linkedin.com/in/dhruvil-patel-8791ba1b8"
    },
    {
        "name": "Rathod Chinmaykumar",
        "image": "https://drive.google.com/uc?export=view&id=1sc7iyDiqSGN0DSYGsmlfojf6hwngt698",
        "position": "GET",
        "company": "JSW Steel, Mumbai",
        "year": "2023",
        "text": "https://www.linkedin.com/in/chinmay-26-rathod"
    },
      {
          "name": "Janavi Popat",
          "image": "https://drive.google.com/uc?export=view&id=1tpFOy2WtFNqERXTzDsEwYRjF_5JPX0mg",
          "position": "GET",
          "company": "Cairn Oil & Gas",
          "year": "2023",
          "text": "https://www.linkedin.com/in/janavi-popat"
      },
      {
          "name": "Nishith Chaurasia",
          "image": "https://drive.google.com/uc?export=view&id=1FNqehHXhHiARStXoe4ZAa6pNaAJSLfGW",
          "position": "Graduate Engineer Trainee",
          "company": "TVS Motors",
          "year": "2023",
          "text": "https://www.linkedin.com/in/nishith-chaurasia"
      },
      {
          "name": "Krutin Parekh",
          "image": "https://drive.google.com/uc?export=view&id=14fZw0GXtm6cXJO7QvgyOmP_Z35VL_NDf",
          "position": "Electrical Manager",
          "company": "Reliance",
          "year": "2023",
          "text": "https://www.linkedin.com/in/krutin-parekh/"
      },
      {
          "name": "Aneesha Sengupta",
          "image": "https://drive.google.com/uc?export=view&id=1forRMFCPJo4sO4t8FyeeraYpqC1-Br8e",
          "position": "MS student",
          "company": "Cornell University",
          "year": "2023",
          "text": "https://www.linkedin.com/in/aneesha-sengupta-850760194"
      },
      {
          "name": "Suthar Omprakash Lunaram",
          "image": "https://drive.google.com/uc?export=view&id=1jQIAktQx6pnwGh9Y4ixewXlaMqrIRRp7",
          "position": "NA",
          "company": "NA",
          "year": "2023",
          "text": "https://www.linkedin.com/in/omprakash-suthar-602991196"
      }
  

]



function CreateEntry(alum) {
  return (
    <Card
      key={alum.id}
      name={alum.name}
      position={alum.position}
      company={alum.company}
      img={alum.image}
      url={alum.text}
    />
  );
}
function Alumni() {
  let [graduatingYear, changeYear] = React.useState(2023);
  const [filteredAlumni, setFilteredAlumni] = React.useState(
    alumni2025.filter((alum) => alum.year === 2023)
  );
  const limit = 2019;
  React.useEffect(() => {
    if (graduatingYear == "other") {
      let filteredData = alumni2025.filter(alum => alum.year < limit)
      console.log(filteredData)
      setFilteredAlumni(filteredData);
    } else {
      let filteredData = alumni2025.filter((alum) => parseInt(alum.year) === graduatingYear);
      console.log(filteredData)
      setFilteredAlumni(filteredData);
    }
  }, [graduatingYear]);

  const handleButtonClick = (value) => {
    changeYear(value);
  };
  return (
    <div className="alumni-container">
      <div className="alumni-bar">
        <div className="alumni-bar-contain">
          <button
            value={2023}
            onClick={() => {
              handleButtonClick(2023);
            }}
          >
            2023
          </button>
          <button
            value={2022}
            onClick={() => {
              handleButtonClick(2022);
            }}
          >
            2022
          </button>
          <button
            value={2021}
            onClick={() => {
              handleButtonClick(2021);
            }}
          >
            2021
          </button>
          <button
            value={2020}
            onClick={() => {
              handleButtonClick(2020);
            }}
          >
            2020
          </button>
          <button
            value={2019}
            onClick={() => {
              handleButtonClick(2019);
            }}
          >
            2019
          </button>
          <button
            value={"other"}
            onClick={() => {
              handleButtonClick("other");
            }}
          >
            Other
          </button>
        </div>
      </div>
      <h1>Alumni</h1>
      <div className="alumni-year">
        <div className="alumni-year-child">
          {
            graduatingYear == "other"
              ?
              <h2 className="alumni-gradyear">Over the Years</h2>
              :
              <h2 className="alumni-gradyear">
                {graduatingYear}
              </h2>
          }
          {filteredAlumni.map(CreateEntry)}
        </div>
      </div>
    </div>
  );
}
export default Alumni;
