// All the words or sentences in the project are here, which are called from within the project

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLang = async () => {
  try {
    const lang = await AsyncStorage.getItem('lang');
    if (lang === 'English') {
      
      Strings.play = 'Play';
      Strings.lang = 'English';
      Strings.language = 'Language';
      Strings.settings = 'Settings';
      Strings.roundTime = 'Round time';
      Strings.inSeconds = 'In seconds';
      Strings.victoryPoints = 'Victory points';
      Strings.numberOfWords = 'Number of words to guess to win';
      Strings.teams = 'Teams';
      Strings.team = 'Team';
      Strings.player = 'Player';
      Strings.addPlayer = 'Add player';
      Strings.addTeam = 'Add a team';
      Strings.start = 'Start';
      Strings.point = 'point';
      Strings.points = 'Points';
      Strings.winner = 'Winner!';
      Strings.newGame = 'New game';
      Strings.teamName = 'Team name';
      Strings.playerName = 'Player name';
      Strings.Feedback = 'Feedback';
      Strings.ReportProblems = 'Report technology issues or suggest new features';
    } else if (lang === 'Русский') {
      Strings.play = 'Играть';
      Strings.language = 'Язык';
      Strings.lang = 'Русский';
      Strings.settings = 'Настройки';
      Strings.roundTime = 'Время раунда';
      Strings.inSeconds = 'В секундах';
      Strings.victoryPoints = 'Победные очки';
      Strings.numberOfWords =
        'Количество слов которые нужно отгадать для победы';
      Strings.teams = 'Команды';
      Strings.team = 'Команда';
      Strings.player = 'Игрок';
      Strings.addPlayer = 'Добавить игрока';
      Strings.addTeam = 'Добавить команду';
      Strings.start = 'Начать';
      Strings.point = 'очки';
      Strings.points = 'Счет';
      Strings.winner = 'Победитель!';
      Strings.newGame = 'Новая игра';
      Strings.teamName = 'Название команды';
      Strings.playerName = 'Имя игрока';
      Strings.Feedback = 'Обратная связь';
      Strings.ReportProblems = 'Сообщить о технологических проблемах или предложить новые функции';
    } else if (lang === 'Հայերեն') {
      Strings.play = 'Խաղալ';
      Strings.language = 'Լեզու';
      Strings.lang = 'Հայերեն';
      Strings.settings = 'Կարգավորումներ';
      Strings.roundTime = 'ժամանակ';
      Strings.inSeconds = 'Վայրկյաններով';
      Strings.victoryPoints = 'Հաղթանակի միավորներ';
      Strings.numberOfWords = 'Հաղթելու համար գուշակելու բառերի քանակը';
      Strings.teams = 'Թիմեր';
      Strings.team = 'Թիմ';
      Strings.player = 'Խաղացող';
      Strings.addPlayer = 'Ավելացնել խաղացողի';
      Strings.addTeam = 'Ավելացնել թիմ';
      Strings.start = 'Սկսել';
      Strings.point = 'Միավորներ';
      Strings.points = 'Միավորները';
      Strings.winner = 'Հաղթող!';
      Strings.newGame = 'Նոր խաղ';
      Strings.teamName = 'Թիմի անվանումը';
      Strings.playerName = 'Խաղացողի անունը';
      Strings.Feedback = 'Հետադարձ կապ';
      Strings.ReportProblems = 'Հաղորդեք տեխնոլոգիական խնդիրների մասին կամ առաջարկեք նոր հնարավորություններ';
    }
  } catch (error) {
    console.log(error);
  }
};

export const Strings = {
  
  if( ) {

  },
  language: 'Язык',
  lang: 'Русский',
  projectName: 'Deasa',
  play: 'Играть',
  settings: 'Настройки',
  roundTime: 'Время раунда',
  inSeconds: 'В секундах',
  victoryPoints: 'Победные очки',
  numberOfWords: 'Количество слов которые нужно отгадать для победы',
  teams: 'Команды',
  team: 'Команда',
  player: 'Игрок',
  addPlayer: 'Добваить игрока',
  addTeam: 'Добавить команду',
  start: 'Начать',
  point: 'очки',
  points: 'Счет',
  winner: 'Победитель!',
  newGame: 'Новая игра',
  teamName: 'Название команды',
  playerName: 'Имя игрока',
  ok: 'OK',
  cancle: 'Cancel',
  sec: 's',
  shareMessage: 'Попробуйте эту игруб думаю ана вам понравится!\n',
  Feedback: 'Обратная связь',
  ReportProblems:
    'Сообщить о технологических проблемах или предложить новые функции',
  languageSelection: 'Language selection',
};
