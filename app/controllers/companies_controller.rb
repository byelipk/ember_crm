class CompaniesController < ApplicationController
  respond_to :json

  def index
    @companies = params[:ids] ? Company.find(params[:ids]) : Company.all
    render json: @companies, status: 200
  end

  def show
    @company = Company.find(params[:id])
    render json: @company, status: 200
  end

  def create
    company = Company.new(company_params)
    if company.save
      render json: company, status: 200
    else
      render json: company.errors.messages , staus: 422
    end
  end

  def update
    company = Company.find(params[:id])
    company.update(company_params)
    render json: company, status: 200
  end

  private

  def company_params
    params.require(:company).permit(:name)
  end
end
