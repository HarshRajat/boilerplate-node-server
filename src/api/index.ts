import { Router } from 'express';

import pushtokens from './routes/pushtokens';

// guaranteed to get dependencies
export default () => {
	const app = Router();

	pushtokens(app);

	return app
}
