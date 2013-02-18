package controllers

import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._

object Kid extends Controller {

  implicit val rds = (
    (__ \ 'kid \ 'name).read[String] and
    (__ \ 'kid \ 'age).read[Int]
  ) tupled

  var kids = List((1, "Matt", 20), (2, "Aubrey", 19), (3, "Carly", 15), (4, "Delaney", 12))

  def list = Action {
    Ok(toJs(kids))
  }

  def create = Action(parse.json) { request =>
    request.body.validate[(String, Int)].map{
      case (name, age) => {
        kids = kids :+ (kids.length + 1, name, age)
        Ok(toJs(kids))
      }
    }.recoverTotal{
      e => BadRequest("Detected error:"+ JsError.toFlatJson(e))
    }
  }

  private def toJs(kids : List[(Int, String, Int)]) = Json.obj("kids" ->
    kids.map(kid => Json.obj("id" -> kid._1, "name" -> kid._2, "age" -> kid._3)))

}
