import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';

import mysqlLoader from './mysql';
import jobsLoader from './jobs';

import Logger from './logger';

//We have to import at least all the events once so they can be triggered
import './events';

export default async ({ expressApp }) => {
  Logger.info('✌️ Loaders connected!');

  const mysqlConnection = await mysqlLoader();
  Logger.info('✌️ DB instantiated!');

  // It returns the agenda instance because it's needed in the subsequent loaders
  await dependencyInjectorLoader();
  Logger.info('✌️ Dependency Injector loaded');

  await jobsLoader({ mysqlConnection });
  Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
