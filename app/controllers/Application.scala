package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index(resource : String) = Action {
    Ok(views.html.index())
  }
  
}