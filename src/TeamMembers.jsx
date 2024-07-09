import TeamMemberCard from './TeamMemberCard'
const TeamMembers = ({employees , selectTeam , handleCardClick})=> {
  return (
      employees.map((employee) => (
        <TeamMemberCard employee={employee} handleCardClick= {handleCardClick} selectTeam={selectTeam}/>
      ))
    )
}
export default TeamMembers;