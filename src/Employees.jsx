
import Teams from './Teams'
import TeamMembers from './TeamMembers'
const Employees = ({ handleCardClick, handleSelectTeam, selectTeam, employees }) => {

  return (
    <main className="container">
      <div className="row justify-content-center my-3">
        <div className="col-7">
          <Teams selectTeam={selectTeam} handleSelectTeam={handleSelectTeam} />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employees={employees}
              handleCardClick={handleCardClick}
              selectTeam={selectTeam} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees