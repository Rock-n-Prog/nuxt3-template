import { renderPlaygroundPage } from 'graphql-playground-html';
import type { IncomingMessage, ServerResponse } from 'http';

function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const body = renderPlaygroundPage({
      endpoint: '/api/graphql',
    });
    res.end(body);
  } catch (err) {
    res.end({ message: err.message });
  }
}

export default handler;
