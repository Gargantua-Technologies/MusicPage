// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_root: "http://127.0.0.1:8090/api",
  api_main: "/main",
  api_collection_albums: "/collection/albums/",
  api_collection_playlists: "/collection/playlists/",
  api_collection_authors: "/collection/authors/",
  api_like_track: "/like/track/",
  api_like_album: "/like/album/",
  api_history_save_track: "/history/save/track/",
  api_album_get: "/album/get/",
  api_tracks_get: "/album/tracks/get/",
  api_track_get: "http://127.0.0.1:8090/api/track/get/",
  api_user_get: "http://127.0.0.1:8090/api/user",
  api_login: "http://127.0.0.1:8090/api/login",
  api_logout: "http://127.0.0.1:9000/auth/logout",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
