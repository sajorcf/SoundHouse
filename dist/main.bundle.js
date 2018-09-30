webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"loading\">\n  <div class=\"loading-content\">\n    <img src=\"assets/images/loading.svg\" title=\"Cargando...\"/>\n  </div>\n</div>\n<app-player *ngIf=\"!router.url.includes('main') || !router.url.includes('start')\"></app-player>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_youtube_player__ = __webpack_require__("../../../../ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_genres_service__ = __webpack_require__("../../../../../src/app/services/genres.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_songs_service__ = __webpack_require__("../../../../../src/app/services/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_start_start_component__ = __webpack_require__("../../../../../src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_player_player_component__ = __webpack_require__("../../../../../src/app/components/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_my_songs_my_songs_component__ = __webpack_require__("../../../../../src/app/components/my-songs/my-songs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_browse_browse_component__["a" /* BrowseComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_playlist_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_my_songs_my_songs_component__["a" /* MySongsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APP_ROUTING */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_youtube_player__["a" /* YoutubePlayerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_functions_service__["a" /* FunctionsService */],
                __WEBPACK_IMPORTED_MODULE_7__services_genres_service__["a" /* GenresService */],
                __WEBPACK_IMPORTED_MODULE_8__services_songs_service__["a" /* SongsService */],
                __WEBPACK_IMPORTED_MODULE_9__services_playlists_service__["a" /* PlaylistsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_youtube_service__["a" /* YoutubeService */],
                __WEBPACK_IMPORTED_MODULE_11__services_player_service__["a" /* PlayerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_start_start_component__ = __webpack_require__("../../../../../src/app/components/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_my_songs_my_songs_component__ = __webpack_require__("../../../../../src/app/components/my-songs/my-songs.component.ts");







var APP_ROUTES = [
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_1__components_start_start_component__["a" /* StartComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'browse', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_browse_browse_component__["a" /* BrowseComponent */] },
            { path: ':q', component: __WEBPACK_IMPORTED_MODULE_4__components_browse_browse_component__["a" /* BrowseComponent */] }
        ]
    },
    { path: 'playlist', children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: ':code', component: __WEBPACK_IMPORTED_MODULE_5__components_playlist_playlist_component__["a" /* PlaylistComponent */] }
        ]
    },
    { path: 'me', children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'songs', component: __WEBPACK_IMPORTED_MODULE_6__components_my_songs_my_songs_component__["a" /* MySongsComponent */] },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<content>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn noBg inTitle\" (click)=\"func.goBack()\"><i class=\"fa fa-angle-left\"></i></button>\n      <button class=\"btn noBg inTitle\" (click)=\"func.goForward()\"><i class=\"fa fa-angle-right\"></i></button>\n      <h1 class=\"d-inline\">\n        <b *ngIf=\"!isSearch\">The Killers Radio</b>\n        <b *ngIf=\"isSearch\">Searching: \"{{querySearch}}\"</b>\n      </h1>\n    </div>\n  </div>\n  <!-- Browse -->\n  <div class=\"section browse\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"nav nav-tabs\">\n          <li><a data-toggle=\"tab\" href=\"#all\" class=\"active\">Show All</a></li>\n          <li><a data-toggle=\"tab\" href=\"#audio\">Solo Audio</a></li>\n          <li><a data-toggle=\"tab\" href=\"#lyrics\">Solo Lyrics</a></li>\n        </ul>\n\n        <div class=\"tab-content\">\n          <div id=\"all\" class=\"tab-pane fade in active show\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr *ngFor=\"let video of videoList\">\n                    <td (click)=\"player.play(video)\"><img [src]=\"video.snippet.thumbnails.default.url\"/></td>\n                    <td width=\"80px\">\n                      <button class=\"btn noBg heart\" (click)=\"song.favClicked($event, video)\"></button>\n                      <button class=\"btn noBg song-actions noULine\"\n                        (click)=\"func.openActions($event)\">\n                        <ul class=\"actions\">\n                          <li>Add to My Songs</li>\n                          <li>Add to queue</li>\n                          <li class=\"sub\">Add to playlist\n                            <ul>\n                              <li *ngFor=\"let plist of playlist.listPlaylists\"\n                                (click)=\"playlist.add(plist.url, video)\">{{plist.name}}</li>\n                              <li (click)=\"playlist.openPopup()\"><i class=\"fa fa-plus\"></i>\n                                Create a playlist\n                              </li>\n                            </ul>\n                          </li>\n                          <li>Share Song</li>\n                        </ul>\n                      </button>\n                    </td>\n                    <td>{{video.snippet.title}}</td>\n                    <td>{{video.snippet.channelTitle}}</td>\n                    <td class=\"text-right\">\n                      <button class=\"btn noBg\"><i class=\"fa fa-microphone\"></i></button>\n                      3:55\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div id=\"audio\" class=\"tab-pane fade\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td>foto</td>\n                    <td>actions</td>\n                    <td>nombre</td>\n                    <td>grupo</td>\n                    <td>tiempo</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div id=\"lyrics\" class=\"tab-pane fade\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td>foto</td>\n                    <td>actions</td>\n                    <td>nombre</td>\n                    <td>grupo</td>\n                    <td>tiempo</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</content>"

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Social*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_songs_service__ = __webpack_require__("../../../../../src/app/services/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(song, router, func, playlist, route, youtube, player) {
        var _this = this;
        this.song = song;
        this.router = router;
        this.func = func;
        this.playlist = playlist;
        this.route = route;
        this.youtube = youtube;
        this.player = player;
        this.isSearch = false;
        this.querySearch = '';
        this.videoList = [];
        this.route.params.subscribe(function (params) {
            if (params['q']) {
                _this.isSearch = true;
                _this.querySearch = params['q'];
                _this.search(params['q']);
            }
        });
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent.prototype.search = function (q) {
        var _this = this;
        this.func.showLoading();
        this.youtube.search(q).subscribe(function (data) {
            _this.videoList = data.items;
            console.log(data);
        }, function (err) {
            console.log(err);
        }, function () {
            _this.func.hideLoading();
        });
    };
    BrowseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/components/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/browse/browse.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_songs_service__["a" /* SongsService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_functions_service__["a" /* FunctionsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_playlists_service__["a" /* PlaylistsService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_player_service__["a" /* PlayerService */]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<content class=\"hasPlayer\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1><b>Made for you</b></h1>\n      <h3>Music specially selected for you</h3>\n    </div>\n  </div>\n  <!-- Album -->\n  <div class=\"section albums\">\n    <div class=\"row\">\n      <div class=\"col-md-3 albums-box\">\n        <div class=\"album\">\n          <h4>Weekly</h4>\n          <div class=\"image\" [ngStyle]=\"{'background-image':'url(assets/images/albums/weekly.jpg)'}\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-3 albums-box\">\n        <div class=\"album\">\n          <h4>Weekly</h4>\n          <div class=\"image\" [ngStyle]=\"{'background-image':'url(assets/images/albums/weekly.jpg)'}\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-3 albums-box\">\n        <div class=\"album\">\n          <h4>Weekly</h4>\n          <div class=\"image\" [ngStyle]=\"{'background-image':'url(assets/images/albums/weekly.jpg)'}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h3><b>Explore by genre</b></h3>\n    </div>\n    <div class=\"col-md-4 text-right\">\n      <button class=\"btn noBg\" (click)=\"router.navigate(['genres'])\">See more</button>\n    </div>\n  </div>\n  <div class=\"section genres\">\n    <div class=\"row\">\n      <div class=\"col-md-3 genres-box\" *ngFor=\"let genre of listGenres\">\n        <div class=\"genre\" (click)=\"router.navigate(['/browse',genre.code])\">\n          <h4>{{genre.name}}</h4>\n          <div class=\"image\" [ngStyle]=\"{'background-image':'url(assets/images/genres/'+genre.image+')'}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Radio -->\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h3><b>Radio</b></h3>\n    </div>\n    <div class=\"col-md-4 text-right\">\n      <button class=\"btn noBg\" (click)=\"router.navigate(['radio'])\">See more</button>\n    </div>\n  </div>\n  <!-- Radio -->\n  <div class=\"section radio\">\n  </div>\n</content>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genres_service__ = __webpack_require__("../../../../../src/app/services/genres.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(genres, router) {
        this.genres = genres;
        this.router = router;
        this.listGenres = [];
        this.listGenres = this.genres.getSavedGenres();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genres_service__["a" /* GenresService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<content>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h1><b>Welcome, Andrés</b></h1>\n      <h3>Select genres of your interest</h3>\n    </div>\n    <div class=\"col-md-4 text-right\">\n      <button *ngIf=\"!listSelected.length\" class=\"btn noBg\" (click)=\"router.navigate(['home'])\">Skip >></button>\n      <button *ngIf=\"listSelected.length\" class=\"btn noBg\" (click)=\"saveGenres()\">Continue >></button>\n    </div>\n  </div>\n  <!-- Genres -->\n  <div class=\"section genres\">\n    <div class=\"row\">\n      <div class=\"col-md-3 genres-box\" *ngFor=\"let genre of listGenres\">\n        <div class=\"genre\" [ngClass]=\"func.inArray(genre.code, listSelected) ? 'selected' : ''\"\n          (click)=\"selectGenre($event, genre)\">\n          <h4>{{genre.name}}</h4>\n          <div class=\"image\" [ngStyle]=\"{'background-image':'url(assets/images/genres/'+genre.image+')'}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</content>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genres_service__ = __webpack_require__("../../../../../src/app/services/genres.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(genres, func, router) {
        this.genres = genres;
        this.func = func;
        this.router = router;
        this.listGenres = [];
        this.listSelected = [];
        this.getGenres();
    }
    MainComponent.prototype.getGenres = function () {
        this.func.showLoading();
        this.listSelected = this.genres.getSavedGenres();
        this.listGenres = this.genres.getGenres();
        this.func.hideLoading();
    };
    MainComponent.prototype.saveGenres = function () {
        this.func.showLoading();
        this.genres.saveGenres(this.listSelected);
        this.router.navigate(['home']);
        this.func.hideLoading();
    };
    MainComponent.prototype.selectGenre = function (e, genre) {
        if (this.func.inArray(genre, this.listSelected)) {
            this.func.delFromArray(genre, this.listSelected);
        }
        else {
            this.listSelected.push(genre);
        }
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__(e.target).parent().hasClass('selected')) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(e.target).parent().removeClass('selected');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(e.target).parent().addClass('selected');
        }
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genres_service__["a" /* GenresService */], __WEBPACK_IMPORTED_MODULE_2__services_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/my-songs/my-songs.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-songs/my-songs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-songs/my-songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MySongsComponent = /** @class */ (function () {
    function MySongsComponent() {
    }
    MySongsComponent.prototype.ngOnInit = function () {
    };
    MySongsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-songs',
            template: __webpack_require__("../../../../../src/app/components/my-songs/my-songs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/my-songs/my-songs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MySongsComponent);
    return MySongsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"titles\" *ngIf=\"mPlayer.isSet\">\n        <div class=\"row d-flex h-100 align-items-center\">\n          <div class=\"col-md-3\">\n            <img (change)=\"savePlayer(player)\" [src]=\"mPlayer.video.snippet.thumbnails.default.url\" class=\"song-photo\"\n              title=\"{{mPlayer.video.snippet.title}}\" />\n          </div>\n          <div class=\"col-md-9\">\n            <h1>{{mPlayer.video.snippet.channelTitle}}</h1>\n            <h2>{{mPlayer.video.snippet.title.substring(0, 20)}}</h2>\n            <button class=\"btn noBg heart\" (click)=\"song.favClicked($event, mPlayer.video)\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <div class=\"row d-flex h-100 align-items-center text-center\">\n        <div class=\"bars\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <button class=\"btn noBg\"><i class=\"fa fa-random\"></i></button>\n              <button class=\"btn noBg\"><i class=\"fa fa-step-backward\"></i></button>\n              <button class=\"btn noBg play\" (click)=\"mPlayer.playOrPause($event)\"></button>\n              <button class=\"btn noBg\"><i class=\"fa fa-step-forward\"></i></button>\n              <button class=\"btn noBg disabled\"><i class=\"fa fa-repeat\"></i></button>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"current-time\"><span>1:45</span></div>\n              <div class=\"progress-bar\">\n                <div class=\"bar\" [ngStyle]=\"{'width':'20%'}\"></div>\n              </div>\n              <div class=\"final-time\"><span>6:03</span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 text-right\">\n      <div class=\"row d-flex h-100 align-items-center\">\n        <div class=\"col-md-12\">\n          <button class=\"btn noBg\"><i class=\"fa fa-volume-up\"></i></button>\n          <button class=\"btn noBg\"><i class=\"fa fa-list-ul\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"video\">\n  <youtube-player [videoId]=\"mPlayer.videoSource\" (ready)=\"mPlayer.savePlayer($event)\"\n    (change)=\"mPlayer.onStateChange($event)\"></youtube-player>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Social*/\n.player {\n  background: #252525;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 85px;\n  -webkit-box-shadow: 0 -1px 10px #000;\n          box-shadow: 0 -1px 10px #000;\n  padding: 0 25px;\n  color: #fff;\n  z-index: 1000; }\n.player .titles img {\n    width: 85px;\n    height: 85px; }\n.player .titles h1 {\n    margin: 0;\n    width: 100%;\n    font-size: 12px; }\n.player .titles h2 {\n    margin: 0;\n    font-size: 14px;\n    font-weight: bold;\n    display: inline-block; }\n.player .titles button {\n    padding: 0;\n    margin-left: 10px;\n    font-size: 14px; }\n.player .bars {\n    width: 100%; }\n.player .bars button {\n      padding-top: 0;\n      padding-bottom: 0; }\n.player .bars .current-time {\n      display: inline-block;\n      min-width: 40px; }\n.player .bars .progress-bar {\n      width: calc(100% - 90px);\n      display: inline-block;\n      background: #515151;\n      border-radius: 5px; }\n.player .bars .progress-bar .bar {\n        background: -webkit-gradient(linear, left top, right top, from(#FF00B4), to(#A000BE));\n        background: linear-gradient(to right, #FF00B4, #A000BE);\n        height: 6px;\n        border-radius: 5px; }\n.player .bars .final-time {\n      display: inline-block;\n      min-width: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_songs_service__ = __webpack_require__("../../../../../src/app/services/songs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(mPlayer, song) {
        this.mPlayer = mPlayer;
        this.song = song;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("../../../../../src/app/components/player/player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_2__services_songs_service__["a" /* SongsService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<content class=\"hasPlayer\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn noBg inTitle\" (click)=\"func.goBack()\"><i class=\"fa fa-angle-left\"></i></button>\n      <button class=\"btn noBg inTitle\" (click)=\"func.goForward()\"><i class=\"fa fa-angle-right\"></i></button>\n      <div class=\"playlist-title\">\n        <img src=\"assets/images/portada.jpg\" />\n        <div class=\"texts\">\n          <h1><b>{{pl_data.name}}</b></h1>\n          <h3>Created by You - {{pl_data.songs.length}}</h3>\n          <button class=\"btn playlist play\">Play</button>\n          <button class=\"btn noBg playlist-actions\" (click)=\"func.openActions($event)\">\n            <ul class=\"actions\">\n              <li class=\"sub\">Share Playlist\n                <ul>\n                  <li>Facebook</li>\n                  <li>Twitter</li>\n                  <li>Copy URL</li>\n                </ul>\n              </li>\n              <li>Delete</li>\n            </ul>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Playlists -->\n  <div class=\"section\" *ngIf=\"!pl_data.songs.length\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mt-5\">\n        <h1><b>Start adding songs</b></h1>\n        <p>Add recomended songs or browse and add songs to the playlist using right click.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 mt-5\">\n        <h2 class=\"table-title\">Recommended Songs</h2>\n        <button type=\"button\" class=\"btn btn-primary reload\">Reload</button>\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr *ngFor=\"let video of pl_recommended\">\n                <td (click)=\"player.play(video)\"><img [src]=\"video.snippet.thumbnails.default.url\"/></td>\n                <td width=\"80px\">\n                  <button class=\"btn noBg heart\" (click)=\"song.favClicked($event, video)\"></button>\n                  <button class=\"btn noBg song-actions noULine\"\n                    (click)=\"func.openActions($event)\">\n                    <ul class=\"actions\">\n                      <li>Add to My Songs</li>\n                      <li>Add to queue</li>\n                      <li class=\"sub\">Add to playlist\n                        <ul>\n                          <li *ngFor=\"let plist of playlist.listPlaylists\"\n                            (click)=\"playlist.add(plist.url, video)\">{{plist.name}}</li>\n                          <li (click)=\"playlist.openPopup()\"><i class=\"fa fa-plus\"></i>\n                            Create a playlist\n                          </li>\n                        </ul>\n                      </li>\n                      <li>Share Song</li>\n                    </ul>\n                  </button>\n                </td>\n                <td>{{video.snippet.title}}</td>\n                <td>{{video.snippet.channelTitle}}</td>\n                <td class=\"text-right\">\n                  <button class=\"btn noBg\"><i class=\"fa fa-microphone\"></i></button>\n                  3:55\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section songs\" *ngIf=\"pl_data.songs.length\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"nav nav-tabs\">\n          <li><a data-toggle=\"tab\" href=\"#all\" class=\"active\">Show All</a></li>\n          <li><a data-toggle=\"tab\" href=\"#audio\">Solo Audio</a></li>\n          <li><a data-toggle=\"tab\" href=\"#lyrics\">Solo Lyrics</a></li>\n          <li class=\"search float-right\">\n            <form>\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"search\" class=\"form-control\" placeholder=\"Search\" />\n              </div>\n            </form>\n          </li>\n        </ul>\n\n        <div class=\"tab-content\">\n          <div id=\"all\" class=\"tab-pane fade in active show\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr *ngFor=\"let video of pl_data.songs\">\n                    <td (click)=\"player.play(video)\"><img [src]=\"video.snippet.thumbnails.default.url\"/></td>\n                    <td width=\"80px\">\n                      <button class=\"btn noBg heart\" (click)=\"song.favClicked($event, video)\"></button>\n                      <button class=\"btn noBg song-actions noULine\"\n                        (click)=\"func.openActions($event)\">\n                        <ul class=\"actions\">\n                          <li>Add to My Songs</li>\n                          <li>Add to queue</li>\n                          <li class=\"sub\">Add to playlist\n                            <ul>\n                              <li *ngFor=\"let plist of playlist.listPlaylists\"\n                                (click)=\"playlist.add(plist.url, video)\">{{plist.name}}</li>\n                              <li (click)=\"playlist.openPopup()\"><i class=\"fa fa-plus\"></i>\n                                Create a playlist\n                              </li>\n                            </ul>\n                          </li>\n                          <li>Share Song</li>\n                        </ul>\n                      </button>\n                    </td>\n                    <td>{{video.snippet.title}}</td>\n                    <td>{{video.snippet.channelTitle}}</td>\n                    <td class=\"text-right\">\n                      <button class=\"btn noBg\"><i class=\"fa fa-microphone\"></i></button>\n                      3:55\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div id=\"audio\" class=\"tab-pane fade\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td>foto</td>\n                    <td>actions</td>\n                    <td>nombre</td>\n                    <td>grupo</td>\n                    <td>tiempo</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div id=\"lyrics\" class=\"tab-pane fade\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td>foto</td>\n                    <td>actions</td>\n                    <td>nombre</td>\n                    <td>grupo</td>\n                    <td>tiempo</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</content>"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Social*/\n.playlist-title {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 30px; }\n.playlist-title .texts {\n    display: inline-block;\n    vertical-align: bottom;\n    margin-bottom: 10px; }\n.playlist-title .texts h1 {\n      text-decoration: underline; }\n.playlist-title .texts h3 {\n      font-size: 24px;\n      margin-bottom: 10px; }\n.playlist-title .texts button.play {\n      min-width: 120px;\n      font-size: 14px;\n      border: 0;\n      border-radius: 100px;\n      -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n              box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n      background: linear-gradient(135deg, #FF00B4, #75008b);\n      color: #fff;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      position: relative; }\n.playlist-title .texts button.play:hover {\n        background: linear-gradient(135deg, #75008b, #FF00B4); }\n.playlist-title .texts button.play:active {\n        top: 1px;\n        left: 1px; }\n.playlist-title img {\n    width: 190px;\n    height: 190px;\n    -webkit-box-shadow: 1px 1px 5px #000;\n            box-shadow: 1px 1px 5px #000;\n    margin-right: 15px;\n    position: relative; }\n.playlist-title img::after {\n      content: '';\n      background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/cd.png")) + ");\n      width: 70px;\n      height: 180px;\n      background-position: right;\n      position: absolute;\n      z-index: -1;\n      top: 3px;\n      left: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_genres_service__ = __webpack_require__("../../../../../src/app/services/genres.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(func, playlist, route, youtube, genres, player) {
        var _this = this;
        this.func = func;
        this.playlist = playlist;
        this.route = route;
        this.youtube = youtube;
        this.genres = genres;
        this.player = player;
        this.code = '';
        this.pl_data = [];
        this.pl_recommended = [];
        var code = '';
        this.route.params.subscribe(function (params) {
            if (params['code']) {
                _this.playlist.setCurrentPlaylist(params['code']);
                _this.pl_data = _this.playlist.getPlaylist();
                if (!_this.pl_data) {
                    _this.searchByGenres();
                }
            }
        });
    }
    PlaylistComponent.prototype.searchByGenres = function () {
        var _this = this;
        this.func.showLoading();
        var genres = this.genres.getSavedGenres();
        var tam = genres.length;
        this.youtube.search(genres[tam - 1].name).subscribe(function (data) {
            _this.pl_recommended = data.items;
        }, function (err) {
            console.log(err);
        }, function () {
            _this.func.hideLoading();
        });
    };
    PlaylistComponent.prototype.hasSongs = function () {
        return this.playlist.hasSongs();
    };
    PlaylistComponent.prototype.ngOnInit = function () {
    };
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playlist',
            template: __webpack_require__("../../../../../src/app/components/playlist/playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_2__services_playlists_service__["a" /* PlaylistsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_youtube_service__["a" /* YoutubeService */], __WEBPACK_IMPORTED_MODULE_5__services_genres_service__["a" /* GenresService */], __WEBPACK_IMPORTED_MODULE_6__services_player_service__["a" /* PlayerService */]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"logo-sidebar\">\n    <img src=\"assets/images/logo.svg\" title=\"SoundHouse\" alt=\"SoundHouse\" />\n  </div>\n  <div class=\"search\">\n    <form>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"q\" class=\"form-control\" placeholder=\"Search\" />\n        <input type=\"submit\" (click)=\"router.navigate(['/browse',q])\" value=\"Search\" class=\"d-none\">\n      </div>\n    </form>\n  </div>\n  <div class=\"menu\">\n    <ul>\n      <li><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home</a></li>\n      <li><a [routerLink]=\"['/browse']\" [routerLinkActive]=\"['active']\">Browse</a></li>\n      <li class=\"separator\"></li>\n      <li><a class=\"title\">Your Music</a></li>\n      <li><a [routerLink]=\"['/me','songs']\" [routerLinkActive]=\"['active']\">My Songs</a></li>\n      <li><a [routerLink]=\"['/artist']\" [routerLinkActive]=\"['active']\">Artist</a></li>\n      <li class=\"separator\"></li>\n      <li><a class=\"title\">Playlists</a></li>\n      <li>\n        <a (click)=\"playlist.openPopup()\">\n          <i class=\"fa fa-plus\"></i>\n          Create a playlist\n        </a>\n      </li>\n      <li *ngFor=\"let plist of playlist.listPlaylists\">\n        <a [routerLink]=\"['/playlist',plist.url]\" [routerLinkActive]=\"['active']\">{{plist.name}}</a></li>\n    </ul>\n  </div>\n</div>\n<!-- Playlists Create -->\n<div class=\"playlists-create\">\n  <div class=\"playlists-box\">\n    <div class=\"title\">\n      Create Playlist\n      <button class=\"btn noBg close\" (click)=\"playlist.closePopup()\"></button>\n      </div>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <label>Image</label>\n          <label for=\"upload-image\" class=\"image-rendering\"></label>\n          <input type=\"file\" id=\"upload-image\" />\n        </div>\n        <div class=\"col-md-7\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Playlist name\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea id=\"description\" class=\"form-control\" name=\"description\" rows=\"5\" [(ngModel)]=\"description\" placeholder=\"Playlist description\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row text-right mt-3\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group d-block w-100\">\n            <button type=\"button\" class=\"btn noBg cancel\" (click)=\"playlist.closePopup()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary create\" (click)=\"createPlaylist()\">Create</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Social*/\n.sidebar {\n  width: 300px;\n  background: #252525;\n  -webkit-box-shadow: 2px 0 10px #330024;\n          box-shadow: 2px 0 10px #330024;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0; }\n.sidebar .logo-sidebar {\n    text-align: center;\n    padding: 40px 20px; }\n.sidebar .logo-sidebar img {\n      max-width: 160px; }\n.sidebar .search {\n    padding: 0 25px;\n    position: relative;\n    margin-bottom: 40px; }\n.sidebar .search input {\n      background: none;\n      border: 0;\n      border-radius: 0;\n      border-bottom: 1px solid #515151;\n      padding-left: 30px;\n      font-size: 17px;\n      color: #fff; }\n.sidebar .search input:focus {\n        -webkit-box-shadow: none;\n                box-shadow: none; }\n.sidebar .search::before {\n      content: '\\F002';\n      font-family: FontAwesome;\n      display: inline-block;\n      font-size: 16px;\n      color: #515151;\n      position: absolute;\n      top: 6px;\n      left: 25px; }\n.sidebar .menu ul {\n    padding: 0; }\n.sidebar .menu ul li {\n      display: block;\n      margin-bottom: 1px; }\n.sidebar .menu ul li a {\n        padding: 5px 20px;\n        font-size: 18px;\n        display: block;\n        color: #fff;\n        -webkit-transition: 0.2s;\n        transition: 0.2s;\n        text-decoration: none;\n        border-left: 5px solid transparent;\n        cursor: pointer; }\n.sidebar .menu ul li a.active, .sidebar .menu ul li a:hover:not(.title) {\n          background: #000;\n          -o-border-image: linear-gradient(to bottom, #ff1abc, #75008b) 1 100%;\n             border-image: -webkit-gradient(linear, left top, left bottom, from(#ff1abc), to(#75008b)) 1 100%;\n             border-image: linear-gradient(to bottom, #ff1abc, #75008b) 1 100%; }\n.sidebar .menu ul li a.title {\n          font-weight: bold; }\n.sidebar .menu ul li a i {\n          margin-right: 4px; }\n.sidebar .menu ul li.separator {\n        margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(playlist, router) {
        this.playlist = playlist;
        this.router = router;
        this.name = '';
        this.description = '';
        this.q = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.createPlaylist = function () {
        var url = this.name.replace(' ', '-').replace(/[^a-zA-Z0-9]/g, '-');
        this.playlist.create(this.name, url.toLowerCase(), this.description);
        this.name = '';
        this.description = '';
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_playlists_service__["a" /* PlaylistsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"start\">\n  <!-- Main Block-->\n  <div class=\"main-block d-flex h-100 align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"logo\">\n            <img src=\"assets/images/logo.svg\" title=\"SoundHouse\" alt=\"SoundHouse\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"titles\">\n            <h1>The House of Music.</h1>\n            <p>Play and download music on your mobile, tablet and computer.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"social-login\">\n            <button class=\"btn btn-primary facebook\">\n              <i class=\"fa fa-facebook\"></i> Facebook\n            </button>\n            <button class=\"btn btn-primary twitter\">\n              <i class=\"fa fa-twitter\"></i> Twitter\n            </button>\n            <p>- OR -</p>\n            <a class=\"btn guest-session\" (click)=\"guestLogin()\" title=\"Try without logging in\">\n              Try without logging in\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Gallery Block -->\n  <div class=\"gallery-block d-flex h-100 align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Lorem ipsum dolor sit amet.</h1>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Social*/\n.start {\n  background: #000;\n  min-height: 100vh; }\n.start .main-block {\n    min-height: 100vh;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/bg-start.png")) + ");\n    background-size: cover;\n    background-color: #000;\n    position: relative;\n    padding: 20px;\n    text-align: center; }\n.start .main-block .logo {\n      text-align: left; }\n.start .main-block .titles {\n      color: #fff;\n      padding: 40px 0; }\n.start .main-block .titles h1 {\n        font-weight: bold;\n        text-transform: uppercase;\n        font-size: 63px; }\n.start .main-block .titles p {\n        font-size: 25px; }\n.start .main-block .social-login button {\n      font-size: 18px;\n      padding: 7px 25px;\n      border-radius: 20px;\n      margin: 0 5px 20px 5px;\n      border: 0; }\n.start .main-block .social-login button i {\n        margin-right: 4px; }\n.start .main-block .social-login button.facebook {\n        background-color: #3b5998; }\n.start .main-block .social-login button.facebook:hover {\n          background-color: #2d4373; }\n.start .main-block .social-login button.twitter {\n        background-color: #1da1f2; }\n.start .main-block .social-login button.twitter:hover {\n          background-color: #0c85d0; }\n.start .main-block .social-login p {\n      font-size: 20px;\n      text-transform: uppercase;\n      color: #fff; }\n.start .main-block .social-login .guest-session {\n      font-size: 20px;\n      text-decoration: underline;\n      color: #fff;\n      -webkit-transition: 0.2s;\n      transition: 0.2s; }\n.start .main-block .social-login .guest-session:hover {\n        opacity: 0.8; }\n.start .gallery-block {\n    min-height: 100vh;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/bg-start-2.jpg")) + ");\n    background-size: cover;\n    position: relative;\n    padding: 20px;\n    text-align: center;\n    color: #fff; }\n.start .gallery-block h1 {\n      font-size: 60px;\n      font-weight: bold;\n      text-transform: uppercase; }\n.start .gallery-block p {\n      text-align: right;\n      font-size: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = /** @class */ (function () {
    function StartComponent(func, router) {
        this.func = func;
        this.router = router;
    }
    StartComponent.prototype.guestLogin = function () {
        this.func.showLoading();
        this.router.navigate(['main']);
        this.func.hideLoading();
    };
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/components/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/start/start.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FunctionsService = /** @class */ (function () {
    function FunctionsService(location) {
        this.location = location;
    }
    FunctionsService.prototype.goBack = function () {
        this.location.back();
    };
    FunctionsService.prototype.goForward = function () {
        this.location.forward();
    };
    FunctionsService.prototype.openActions = function (e) {
        var e = __WEBPACK_IMPORTED_MODULE_2_jquery__(e.target);
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.song-actions>ul, .playlist-actions>ul').slideUp(50);
        if (e.find('>ul').is(':visible')) {
            e.find('>ul').slideUp(100);
        }
        else {
            e.find('>ul').slideDown(100);
        }
    };
    FunctionsService.prototype.showLoading = function (element) {
        if (element === void 0) { element = '.loading'; }
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').css('overflow', 'hidden');
        __WEBPACK_IMPORTED_MODULE_2_jquery__(element).addClass('show');
    };
    FunctionsService.prototype.hideLoading = function (element) {
        if (element === void 0) { element = '.loading'; }
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').css('overflow-y', 'scroll');
        window.setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(element).removeClass('show');
        }, 500);
    };
    FunctionsService.prototype.inArray = function (target, array) {
        if (!array) {
            return;
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] === target) {
                return true;
            }
        }
        return false;
    };
    FunctionsService.prototype.delFromArray = function (target, array) {
        if (!array) {
            return;
        }
        for (var i = array.length; i--;) {
            if (array[i] === target) {
                array.splice(i, 1);
            }
        }
    };
    FunctionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], FunctionsService);
    return FunctionsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/genres.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenresService = /** @class */ (function () {
    function GenresService() {
        this.genres = [
            { code: 'indie', name: 'Indie', image: 'indie.jpg' },
            { code: 'rock', name: 'Rock', image: 'rock.jpg' },
            { code: 'folk-singer', name: 'Folk & Singer - Songwriter', image: 'folk.jpg' },
            { code: 'metal', name: 'Metal', image: 'metal.jpg' },
            { code: 'pop', name: 'Pop', image: 'pop.jpg' },
            { code: 'dance-edm', name: 'Dance & EDM', image: 'dance.jpg' },
            { code: 'mexican', name: 'Mexican music', image: 'mexican.jpg' },
            { code: 'latin', name: 'Latin music', image: 'latin.jpg' },
            { code: 'rnb', name: "R n' B", image: 'rnb.jpg' },
            { code: 'colombian', name: 'Colombian music', image: 'colombian.jpg' },
            { code: 'christian', name: 'Christian music', image: 'christian.jpg' },
            { code: 'electronic', name: 'Electronic', image: 'electronic.jpg' },
            { code: 'blues', name: 'Blues', image: 'blues.jpg' },
            { code: 'brazilian', name: 'Brazilian music', image: 'brazilian.jpg' },
            { code: 'tv-gaming-movies', name: 'TV, Gaming & Movies', image: 'tvgaming.jpg' },
            { code: 'reggaeton', name: 'Reggaeton', image: 'reggaeton.jpg' },
            { code: 'classical', name: 'Classical', image: 'classical.jpg' },
            { code: 'soul-funk', name: 'Soul & Funk', image: 'soul.jpg' },
            { code: 'african', name: 'African music', image: 'african.jpg' },
            { code: 'jazz', name: 'Jazz', image: 'jazz.jpg' },
            { code: 'vallenato', name: 'Vallenato', image: 'vallenato.jpg' },
            { code: 'salsa', name: 'Salsa', image: 'salsa.jpg' },
            { code: 'merengue', name: 'Merengue', image: 'merengue.jpg' },
            { code: 'reggae', name: 'Reggae', image: 'reggae.jpg' },
            { code: 'rap', name: 'Rap', image: 'rap.jpg' }
        ];
    }
    GenresService.prototype.getGenres = function () {
        return this.genres;
    };
    GenresService.prototype.getSavedGenres = function () {
        var arr = JSON.parse(localStorage.getItem('genresListSaved'));
        if (Array.isArray(arr)) {
            return arr;
        }
        return [];
    };
    GenresService.prototype.saveGenres = function (genres) {
        localStorage.setItem('genresListSaved', JSON.stringify(genres));
    };
    GenresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GenresService);
    return GenresService;
}());



/***/ }),

/***/ "../../../../../src/app/services/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.id = '';
        this.isSet = false;
        this.video = {};
        this.videoSource = '';
        this.getCurrent();
    }
    PlayerService.prototype.playOrPause = function (e) {
        var e = __WEBPACK_IMPORTED_MODULE_1_jquery__(e.target);
        if (e.hasClass('play')) {
            this.player.playVideo();
            e.removeClass('play').addClass('pause');
        }
        else {
            this.player.pauseVideo();
            e.removeClass('pause').addClass('play');
        }
    };
    PlayerService.prototype.play = function (video) {
        this.video = video;
        this.isSet = true;
        this.current(video);
        this.videoSource = video.id.videoId;
        //this.savePlayer(this.player);
    };
    PlayerService.prototype.current = function (video) {
        localStorage.setItem('playing', JSON.stringify(video));
    };
    PlayerService.prototype.getCurrent = function () {
        var obj = JSON.parse(localStorage.getItem('playing'));
        if (obj && obj.kind != '') {
            this.play(obj);
        }
    };
    PlayerService.prototype.savePlayer = function (player) {
        this.player = player;
        console.log('player instance', player);
    };
    PlayerService.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/playlists.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistsService = /** @class */ (function () {
    function PlaylistsService(func, router) {
        this.func = func;
        this.router = router;
        this.current = '';
        this.listPlaylists = [];
        this.listPlaylists = this.getPlaylists();
    }
    PlaylistsService.prototype.setCurrentPlaylist = function (current) {
        this.current = current;
    };
    PlaylistsService.prototype.openPopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.playlists-create').fadeIn();
    };
    PlaylistsService.prototype.closePopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.playlists-create').fadeOut();
    };
    PlaylistsService.prototype.add = function (code, song) {
        var _this = this;
        console.log('add');
        var obj = this.listPlaylists;
        obj.forEach(function (playlist) {
            if (playlist.url == code) {
                if (!_this.func.inArray(song, playlist.songs)) {
                    playlist.songs.push(song);
                }
            }
        });
        this.updatePlaylist();
    };
    PlaylistsService.prototype.create = function (_name, _url, _description) {
        var found = false;
        var obj = { name: _name, url: _url, description: _description, songs: [] };
        this.listPlaylists.forEach(function (playlist) {
            if (playlist.url == _url) {
                found = true;
            }
        });
        if (!found) {
            this.listPlaylists.push(obj);
            this.updatePlaylist();
        }
        this.router.navigate(['/playlist', _url]);
        this.closePopup();
    };
    PlaylistsService.prototype.getPlaylists = function () {
        var arr = JSON.parse(localStorage.getItem('playlists'));
        if (Array.isArray(arr)) {
            this.listPlaylists = arr;
        }
        else {
            this.listPlaylists = [];
        }
        return this.listPlaylists;
    };
    PlaylistsService.prototype.updatePlaylist = function () {
        localStorage.setItem('playlists', JSON.stringify(this.listPlaylists));
    };
    PlaylistsService.prototype.hasSongs = function () {
        var _this = this;
        var obj = this.listPlaylists;
        obj.forEach(function (playlist) {
            if (playlist.url == _this.current) {
                if (playlist.songs.length) {
                    return true;
                }
            }
        });
        return false;
    };
    PlaylistsService.prototype.getPlaylist = function () {
        var _this = this;
        var plist = [];
        this.listPlaylists.forEach(function (playlist) {
            if (playlist.url == _this.current) {
                plist = playlist;
            }
        });
        return plist;
    };
    PlaylistsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__functions_service__["a" /* FunctionsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PlaylistsService);
    return PlaylistsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/songs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_service__ = __webpack_require__("../../../../../src/app/services/functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongsService = /** @class */ (function () {
    function SongsService(func) {
        this.func = func;
        this.favorites = [];
        this.favorites = this.getFavorites();
    }
    SongsService.prototype.favClicked = function (e, song) {
        var e = __WEBPACK_IMPORTED_MODULE_2_jquery__(e.target);
        var arr = JSON.parse(localStorage.getItem('favoritesList'));
        if (!Array.isArray(arr)) {
            arr = [];
        }
        if (this.func.inArray(song, arr)) {
            this.func.delFromArray(song, arr);
            e.removeClass('active');
        }
        else {
            arr.push(song);
            e.addClass('active');
        }
        this.favorites = arr;
        localStorage.setItem('favoritesList', JSON.stringify(arr));
    };
    SongsService.prototype.getFavorites = function () {
        var arr = JSON.parse(localStorage.getItem('favoritesList'));
        if (Array.isArray(arr)) {
            this.favorites = arr;
            return this.favorites;
        }
        return [];
    };
    SongsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__functions_service__["a" /* FunctionsService */]])
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/youtube.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeService = /** @class */ (function () {
    function YoutubeService(_http) {
        this._http = _http;
    }
    YoutubeService.prototype.search = function (q) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* ENV */].url + "search?q=" + q + "&part=snippet&maxResults=15&key=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* ENV */].apikey).map(function (response) { return response.json(); });
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/bg-start-2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-start-2.47be2b9c2295f53a5595.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/bg-start.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-start.327fa718809abfe7acc9.png";

/***/ }),

/***/ "../../../../../src/assets/images/cd.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd.01ad17b274758ecc95b2.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    apikey: 'AIzaSyABA4CSVH-3w209dVRLIKDxGtrvROpWLyU',
    url: 'https://www.googleapis.com/youtube/v3/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* ENV */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map