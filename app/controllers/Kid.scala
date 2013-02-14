package controllers

import play.api._
import play.api.mvc._
import libs.json.{JsArray, JsNumber, JsString, JsObject}

object Kid extends Controller {

  var kids = List((1, "Matt", 20), (2, "Aubrey", 19), (3, "Carly", 15), (4, "Delaney", 12))

  def list = Action {
    Ok(toJs(kids))
  }

  private def toJs(kids : List[(Int, String, Int)]) = JsObject(List("kids" ->
    JsArray(kids.map(kid => JsObject(List("id" -> JsNumber(kid._1), "name" -> JsString(kid._2), "age" -> JsNumber(kid._3)))))))

}
