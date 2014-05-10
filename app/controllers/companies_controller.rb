class CompaniesController < ApplicationController
  respond_to :json

  def index
    @companies = Company.all
    render json: @companies, status: 200
  end

  def show
    @company = Company.find(params[:id])
    render json: @company, status: 200
  end
end
