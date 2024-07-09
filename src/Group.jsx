import { useState, useEffect } from "react";
const Group = ({setSelectTeam, selectTeam, employees}) => {
  const [groupTeams, setGroupTeams] = useState(groupTeamMember())

  useEffect(() => {
    console.log(employees)
  }, [employees])

  function groupTeamMember() {
    var teams = [];
    var teamAMembers = employees?.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectTeam === 'TeamA' ? false : true }
    teams.push(teamA);

    var teamBMembers = employees?.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectTeam === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees?.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectTeam === 'TeamC' ? false : true };
    teams.push(teamC);

    var teamDMembers = employees?.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectTeam === 'TeamD' ? false : true };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformeGroupData = groupTeams.map((groupData) => groupData.team === event.currentTarget.id
      ? { ...groupData, collapsed: !groupData.collapsed }
      : groupData);
    setGroupTeams(transformeGroupData);
    setSelectTeam(event.currentTarget.id)
  }

  return (
    <main className="container">
      {
        groupTeams?.map((item) => {
          return (
            <div kay={item.team} className="card mt-2" style={{ cursor: 'pointer' }}>
              <h4 id={item.team} className="card-title text-secondary bg-white" onClick={handleTeamClick}>
                Team Name : {item.team}
              </h4>

              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" :
                ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name : {member.fullName}</span>
                        </h5>
                        <p>Designation : {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}
export default Group 