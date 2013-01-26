package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json.Json

import Array._

object Kid extends Controller {

  def list = Action {
    val kids = Array("Matt", "Aubrey", "Carly", "Delaney")

    Ok(Json.toJson(kids))
  }

}
