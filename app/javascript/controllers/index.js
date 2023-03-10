// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AosController from "./aos_controller"
application.register("aos", AosController)

import BannerScrollerController from "./banner_scroller_controller"
application.register("banner-scroller", BannerScrollerController)

import GeolocationController from "./geolocation_controller"
application.register("geolocation", GeolocationController)

import HomeLogoController from "./home_logo_controller"
application.register("home-logo", HomeLogoController)

import ScrollToFeaturedController from "./scroll_to_featured_controller"
application.register("scroll-to-featured", ScrollToFeaturedController)

import TutorialController from "./tutorial_controller"
application.register("tutorial", TutorialController)
