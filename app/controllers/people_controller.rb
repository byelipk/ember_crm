class PeopleController < ApplicationController
  respond_to :json

  def index
    @people = params[:ids] ? Person.find(params[:ids]) : Person.all
    render json: @people, status: 200
  end

  def show
    @person = Person.find(params[:id])
    render json: @person, status: 200
  end
end
