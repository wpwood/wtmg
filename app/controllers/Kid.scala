package controllers

import play.api._
import play.api.mvc._
import libs.json.{JsArray, JsNumber, JsString, JsObject}

object Kid extends Controller {

  def list = Action {
    val kidNames = List("Matt", "Aubrey", "Carly", "Delaney")

    Ok(toJs(kidNames))
  }

  private def toJs(kidNames : List[String]) = JsObject(List("kids" ->
    JsArray(kidNames.map(name => JsObject(List("name" -> JsString(name), "age" -> JsNumber(name.length)))))))

}
