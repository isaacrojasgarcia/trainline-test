import connection from './connection';

export class journeySvc {
  static getJourney(origin, destination) {
    return connection.request({
        method: 'GET',
        data: {}
      });
  }
};
