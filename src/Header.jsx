const Header = ({selectTeam,countTeam})=> {
  return (
    <header className="container">
      <div className="row justify-content-center my-4">
        <div className="col-8">
          <h1>Team Member Count</h1>
          <h3>{selectTeam} Has {countTeam} {countTeam===1?'Member': 'Members'} </h3>
        </div>
      </div>
    </header>
  )
}
export default Header 