class TasksController < ApplicationController
  respond_to :json

  def index
    @tasks = Task.find(params[:ids])
    render json: @tasks, status: 200
  end

  def show
    @task = Task.find(params[:id])
    render json: @task, status: 200
  end
end
