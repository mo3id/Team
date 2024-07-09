import female from './images/female.png'
import male from './images/male.png'
const TeamMemberCard = ({ employee, selectTeam, handleCardClick }) => {
  return (
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectTeam) ? "card m-2 selected" : "card m-2"} style={{ cursor: "pointer" }} onClick={handleCardClick}>
      {(employee.gender === 'male') ? <img src={male} className="card-img-top" />
        : <img src={female} className="card-img-top" />
      }

      <div className="card-body">
        <h5 className="card-title">Full Name is : {employee.fullName}</h5>
        <h6 className="card-text">Designation is : {employee.designation}</h6>
      </div>
    </div>
  )
}
export default TeamMemberCard;