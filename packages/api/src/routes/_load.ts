import { container } from '@sapphire/pieces';
import { PluginRoute as PluginOAuthCallback } from './oauth/callback.post';
import { PluginRoute as PluginOAuthLogout } from './oauth/logout.post';

export function loadRoutes() {
	const store = 'routes';
	void container.stores.loadPiece({ name: 'callback', piece: PluginOAuthCallback, store });
	void container.stores.loadPiece({ name: 'logout', piece: PluginOAuthLogout, store });
}
