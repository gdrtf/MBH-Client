export class Game {
  Id: number;
  Name: string;
  HomeTeam: Team;
  AwayTeam: Team;
  League: string;
  Season: string;
  Stage: string;
  Date: string;
  HomeWP: number;
  AwayWP: number;
}

export class Team {
  Id: number;
  Name: string;
}

export class User {
  Id: string;
  Username: string;
  Mail: string;
  Password: string;
}
