import { Router } from 'express';

import pushregister from './routes/pushregister';

// guaranteed to get dependencies
export default () => {
	const app = Router();

	pushregister(app);

	return app
}
