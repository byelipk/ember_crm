class PeopleController < ApplicationController
  respond_to :json

  def index
    @people = Person.all
    render json: @people, status: 200
  end

  def show
    @person = Person.find(parans[:id])
    render json: @person, status: 200
  end
end
