class ListsController < ApplicationController

  def index
   lists = List.ordered_json
   render json: lists
  end

  def create
    list = List.new(list_params)
    list.user_id ||= 1
    list.save
  end

  private

  def list_params
    params.require(:list).permit( :title, :user_id )
  end

end
