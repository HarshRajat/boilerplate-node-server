import { Container } from 'typedi';
import LoggerInstance from './logger';
import config from '../config';

export default () => {
  try {
    Container.set('logger', LoggerInstance)
    LoggerInstance.info('✌️ Nothing to do in dependencyInjector');

  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
