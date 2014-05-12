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

  def create
    person = Person.new(person_params)
    if person.save
      render json: person, status: 201
    else
      render json: { errors: person.errors.messages }, status: 422
    end
  end

  def update
    person = Person.find(params[:id])
    if person.update(person_params)
      render json: person, status: 200
    else
      render json: { errors: person.errors.messages }, status: 422
    end
  end

  private

  def person_params
    params.require(:person).permit(:first_name, :last_name, :city, :state, :email)
  end
end
