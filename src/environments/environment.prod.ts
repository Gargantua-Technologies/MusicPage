export const environment = {
  production: true,

  brokerURL: 'wss://damirka.space/api/channel/ws',

  auth_client_name: "music-server",
  auth_client_id: "server",
  auth_client_secret:"secret",
  auth_scopes: "profile music-server.read music-server.write",
  auth_base64: "Basic c2VydmVyOnNlY3JldA==",
  auth_redirect: "https://damirka.space/user/authorized",
  auth_login: "https://damirka.space/auth/oauth2/authorize",
  auth_logout: "https://damirka.space/auth/logout",
  auth_token: "https://damirka.space/auth/oauth2/token",
  auth_introspect: "https://damirka.space/auth/oauth2/introspect",

  api_root: "https://damirka.space/api",
  api_main: "/main",
  api_channel: "/channel",
  api_channel_list: "/channel/list",
  api_channel_create: "/channel/create",
  api_collection_albums: "/collection/albums/",
  api_collection_playlists: "/collection/playlists/",
  api_collection_authors: "/collection/authors/",
  api_like_track: "/like/track/",
  api_like_album: "/like/album/",
  api_history_save_track: "/history/save/track/",
  api_history_save_album: "/history/save/album/",
  api_album_get: "/album/get/",
  api_tracks_get: "/album/tracks/get/",
  api_track_get: "https://damirka.space/fs/tracks/",
  api_user_get: "https://damirka.space/api/user",
  api_login: "https://damirka.space/api/login",
  api_logout: "https://damirka.space/auth/logout",
};
