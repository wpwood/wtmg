package controllers

import play.api.mvc._
import play.api.libs.json._

object Kid extends Controller {

  var kids = List((1, "Matt", 20), (2, "Aubrey", 19), (3, "Carly", 15), (4, "Delaney", 12))

  def list = Action {
    Ok(toJs(kids))
  }

  private def toJs(kids : List[(Int, String, Int)]) = Json.obj("kids" ->
    kids.map(kid => Json.obj("id" -> kid._1, "name" -> kid._2, "age" -> kid._3)))

}
