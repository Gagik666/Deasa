import {Strings} from '../../assets/strings/Strings';
// This is the initial data for the Redux project
const initialState = {
  teams: [
    {
      teamName: `${Strings.team} 1`,
      TeamPoint: 0,
      playerCount: 2,
      players: [
        {
          name: `${Strings.player} 1`,
          id: 1,
        },
        {
          name: `${Strings.player} 2`,
          id: 2,
        },
      ],
      id: 1,
    },
    {
      teamName: `${Strings.team} 2`,
      TeamPoint: 0,
      playerCount: 2,
      players: [
        {
          name: `${Strings.player} 1`,
          id: 1,
        },
        {
          name: `${Strings.player} 2`,
          id: 2,
        },
      ],
      id: 2,
    },
  ],
  teamsCount: 2,
  singers: [],
  tempSingers: [{name: '', id: ''}],
  queueOfTeams: 0,
  queueOfPlayers: 0,
  time: 60,
  tempPoint: 0,
  point: 0,
  fixPoint: 50,
  tempIndex: 0,
  index: 0,
  timer: 0,
  appUrl: '',
  authorEmail: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'editSingers':
      return {
        ...state,
        singers: action.list,
      };
    case 'editTempSingers':
      return {
        ...state,
        teams: [...state.teams, {name: action.name, id: action.id}],
      };
    case 'addTeam':
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            teamName: `${Strings.team} 3`,
            players: [
              {
                name: `${Strings.player} 1`,
                id: 1,
              },
              {
                name: `${Strings.player} 2`,
                id: 2,
              },
            ],
            id: state.teams.length
              ? state.teams[state.teams.length - 1].id + 1
              : 1,
            TeamPoint: 0,
            playerCount: 2,
          },
        ],
        teamsCount: (state.teamsCount += 1),
      };
    case 'editTeamName':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.id
            ? {
                ...obj,
                teamName: action.name,
              }
            : obj,
        ),
      };
    case 'addPlayer':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.id
            ? {
                ...obj,
                players: [
                  ...obj.players,
                  {
                    name: 'player 3',
                    id: obj.players.length
                      ? obj.players[obj.players.length - 1].id + 1
                      : 1,
                  },
                ],
                playerCount: (obj.playerCount += 1),
              }
            : obj,
        ),
      };
    case 'addPoint':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.id
            ? {
                ...obj,
                TeamPoint: (obj.TeamPoint += action.point),
              }
            : obj,
        ),
      };
    case 'resetPoint':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.id
            ? {
                ...obj,
                TeamPoint: (obj.TeamPoint = 0),
              }
            : obj,
        ),
      };
    case 'deleteTeam':
      return {
        ...state,
        teams: state.teams.filter(e => e.id !== action.id),
        teamsCount: (state.teamsCount -= 1),
      };
    case 'deletePlayer':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.teamId
            ? {
                ...obj,
                players: obj.players.filter(e => e.id !== action.playerId),
                playerCount: (obj.playerCount -= 1),
              }
            : obj,
        ),
      };
    case 'editPlayerName':
      return {
        ...state,
        teams: state.teams.map(obj =>
          obj.id === action.teamId
            ? {
                ...obj,
                players: obj.players.map(item =>
                  item.id === action.playerId
                    ? {
                        ...item,
                        name: action.name,
                      }
                    : item,
                ),
              }
            : obj,
        ),
      };
    case 'editQueueOfTeams':
      return {
        ...state,
        queueOfTeams: (state.queueOfTeams += 1),
      };
    case 'editQueueOfPlayers':
      return {
        ...state,
        queueOfPlayers: (state.queueOfPlayers += 1),
      };
    case 'resetQueueOfTeams':
      return {
        ...state,
        queueOfTeams: 0,
      };
    case 'resetQueueOfPlayers':
      return {
        ...state,
        queueOfPlayers: 0,
      };
    case 'addTime':
      return {
        ...state,
        time: (state.time += 5),
      };
    case 'editTime':
      return {
        ...state,
        time: action.value,
      };
    case 'reduceTime':
      return {
        ...state,
        time: (state.time -= 5),
      };
    case 'addTempPoint':
      return {
        ...state,
        tempPoint: (state.tempPoint += 1),
        ponit: (state.point += 1),
        tempIndex: (state.tempIndex += 1),
      };
    case 'reduceTempPoint':
      return {
        ...state,
        tempPoint: (state.tempPoint -= 1),
        ponit: (state.point -= 1),
        tempIndex: (state.tempIndex -= 1),
      };
    case 'editTempIndex':
      return {
        ...state,
        tempIndex: 0,
      };
    case 'editIndex':
      return {
        ...state,
        index: action.index,
      };
    case 'addFixPoint':
      return {
        ...state,
        fixPoint: (state.fixPoint += 5),
      };
    case 'reduceFixPoint':
      return {
        ...state,
        fixPoint: (state.fixPoint -= 5),
      };
    case 'editFixPoint':
      return {
        ...state,
        fixPoint: action.value,
      };
    case 'resetTempPoint':
      return {
        ...state,
        tempPoint: 0,
      };
    case 'editTimer':
      return {
        ...state,
        timer: (state.timer += 1),
      };
    case 'editAppUrl':
      return {
        ...state,
        appUrl: action.url,
      };
    case 'editAuthorEmail':
      return {
        ...state,
        authorEmail: action.email
      };
    default:
      return state;
  }
};

//  This function is for adding a team
export const addTeam = () => {
  return dispatch => {
    return dispatch({type: 'addTeam'});
  };
};

// This function is for changing the team name
export const editTeamName = (id, name) => {
  return dispatch => {
    return dispatch({type: 'editTeamName', id, name});
  };
};

// This function is for changing the name of the player
export const editPlayerName = (playerId, teamId, name) => {
  return dispatch => {
    return dispatch({type: 'editPlayerName', playerId, teamId, name});
  };
};

// This function is for deleting a team
export const deleteTeam = id => {
  return dispatch => {
    return dispatch({type: 'deleteTeam', id});
  };
};

// This function is for deleting a player
export const deletePlayer = (playerId, teamId) => {
  return dispatch => {
    return dispatch({type: 'deletePlayer', playerId, teamId});
  };
};

// This function is for adding a player
export const addPlayer = id => {
  return dispatch => {
    return dispatch({type: 'addPlayer', id});
  };
};

//  This function is for adding singers
export const editSingers = list => {
  return dispatch => {
    return dispatch({type: 'editSingers', list});
  };
};

//  This function is for adding temporary or featured singers
export const editTempSingers = (name, id) => {
  return dispatch => {
    return dispatch({type: 'editTempSingers', name, id});
  };
};

// This function is for changing the queue of teams
export const editQueueOfTeams = () => {
  return dispatch => {
    return dispatch({type: 'editQueueOfTeams'});
  };
};

// This function is designed to change the turn of players
export const editQueueOfPlayers = () => {
  return dispatch => {
    return dispatch({type: 'editQueueOfPlayers'});
  };
};

// This function is designed to reset the queue of teams
export const resetQueueOfTeams = () => {
  return dispatch => {
    return dispatch({type: 'resetQueueOfTeams'});
  };
};

// This function is designed to reset the players queue
export const resetQueueOfPlayers = () => {
  return dispatch => {
    return dispatch({type: 'resetQueueOfPlayers'});
  };
};

// This function is designed to increase the team's playing time by 5 seconds
export const addTime = () => {
  return dispatch => {
    return dispatch({type: 'addTime'});
  };
};

//  This function is designed to change the playing time of the team using the slider
export const editTime = value => {
  return dispatch => {
    return dispatch({type: 'editTime', value});
  };
};

//  This function is designed to reduce the team's playing time by 5 seconds
export const reduceTime = () => {
  return dispatch => {
    return dispatch({type: 'reduceTime'});
  };
};

//  This function is designed to increase the team's temporary game points by one point
export const addTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'addTempPoint'});
  };
}; 


//  This function is designed to reduce the team's temporary game points by one point
export const reduceTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'reduceTempPoint'});
  };
};

// This function is intended to reset the team's temporary game points by point
export const resetTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'resetTempPoint'});
  };
};

//  This function is intended to modify the temporary index of singers to display singers
export const editTempIndex = () => {
  return dispatch => {
    return dispatch({type: 'editTempIndex'});
  };
};

// This function is designed to modify the singer index to display the singers
export const editIndex = index => {
  return dispatch => {
    return dispatch({type: 'editIndex', index});
  };
};

// This function is designed to increase game points by 5 points
export const addFixPoint = () => {
  return dispatch => {
    return dispatch({type: 'addFixPoint'});
  };
};

//  This function is designed to reduce game points by 5 points
export const reduceFixPoint = () => {
  return dispatch => {
    return dispatch({type: 'reduceFixPoint'});
  };
};


// This function is designed to change the game time using a slider
export const editFixPoint = value => {
  return dispatch => {
    return dispatch({type: 'editFixPoint', value});
  };
};

  // This function is designed to increase the team's points
export const addPoint = (id, point) => {
  return dispatch => {
    return dispatch({type: 'addPoint', id, point});
  };
};

// This function is designed to reduce the team's points
export const resetPoint = id => {
  return dispatch => {
    return dispatch({type: 'resetPoint', id});
  };
};

//  This function is intended for changing team credential
export const editTimer = () => {
  return dispatch => {
    return dispatch({type: 'editTimer'});
  };
};

// This function is for modifying the project link
export const editAppUrl = url => {
  return dispatch => {
    return dispatch({type: 'editAppUrl', url});
  };
};

// This function is intended to change the email of the project author
export const editAuthorEmail = email => {
  return dispatch => {
    return dispatch({type: 'editAuthorEmail', email});
  };
};
