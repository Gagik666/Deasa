import {Strings} from '../../assets/strings/Strings';

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

export const addTeam = () => {
  return dispatch => {
    return dispatch({type: 'addTeam'});
  };
};
export const editTeamName = (id, name) => {
  return dispatch => {
    return dispatch({type: 'editTeamName', id, name});
  };
};

export const editPlayerName = (playerId, teamId, name) => {
  return dispatch => {
    return dispatch({type: 'editPlayerName', playerId, teamId, name});
  };
};

export const deleteTeam = id => {
  return dispatch => {
    return dispatch({type: 'deleteTeam', id});
  };
};

export const deletePlayer = (playerId, teamId) => {
  return dispatch => {
    return dispatch({type: 'deletePlayer', playerId, teamId});
  };
};

export const addPlayer = id => {
  return dispatch => {
    return dispatch({type: 'addPlayer', id});
  };
};

export const editSingers = list => {
  return dispatch => {
    return dispatch({type: 'editSingers', list});
  };
};

export const editTempSingers = (name, id) => {
  return dispatch => {
    return dispatch({type: 'editTempSingers', name, id});
  };
};

export const editQueueOfTeams = () => {
  return dispatch => {
    return dispatch({type: 'editQueueOfTeams'});
  };
};

export const editQueueOfPlayers = () => {
  return dispatch => {
    return dispatch({type: 'editQueueOfPlayers'});
  };
};
export const resetQueueOfTeams = () => {
  return dispatch => {
    return dispatch({type: 'resetQueueOfTeams'});
  };
};
export const resetQueueOfPlayers = () => {
  return dispatch => {
    return dispatch({type: 'resetQueueOfPlayers'});
  };
};

export const addTime = () => {
  return dispatch => {
    return dispatch({type: 'addTime'});
  };
};

export const editTime = value => {
  return dispatch => {
    return dispatch({type: 'editTime', value});
  };
};

export const reduceTime = () => {
  return dispatch => {
    return dispatch({type: 'reduceTime'});
  };
};

export const addTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'addTempPoint'});
  };
};

export const reduceTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'reduceTempPoint'});
  };
};
export const resetTempPoint = () => {
  return dispatch => {
    return dispatch({type: 'resetTempPoint'});
  };
};

export const editTempIndex = () => {
  return dispatch => {
    return dispatch({type: 'editTempIndex'});
  };
};

export const editIndex = index => {
  return dispatch => {
    return dispatch({type: 'editIndex', index});
  };
};

export const addFixPoint = () => {
  return dispatch => {
    return dispatch({type: 'addFixPoint'});
  };
};

export const reduceFixPoint = () => {
  return dispatch => {
    return dispatch({type: 'reduceFixPoint'});
  };
};

export const editFixPoint = value => {
  return dispatch => {
    return dispatch({type: 'editFixPoint', value});
  };
};

export const addPoint = (id, point) => {
  return dispatch => {
    return dispatch({type: 'addPoint', id, point});
  };
};

export const resetPoint = id => {
  return dispatch => {
    return dispatch({type: 'resetPoint', id});
  };
};

export const editTimer = () => {
  return dispatch => {
    return dispatch({type: 'editTimer'});
  };
};

export const editAppUrl = url => {
  return dispatch => {
    return dispatch({type: 'editAppUrl', url});
  };
};

export const editAuthorEmail = email => {
  return dispatch => {
    return dispatch({type: 'editAuthorEmail', email});
  };
};
