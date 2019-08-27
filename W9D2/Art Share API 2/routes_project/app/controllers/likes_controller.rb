class LikesController < ApplicationController

 def create
    like = Like.new(like_params)
    # replace the `like_attributes_here` with the actual attribute keys
  
    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end


  def destroy 
    like = Like.find(params[:id])
    #like = Like.find_by(user_id: params[:user_id], likeable_type: params[:likeable_type], likeable_id: params[:likeable_id])
    like.destroy
    render json: like
  end
end

private

def like_params
  params.require(:like).permit(:user_id, :likeable_type, :likeable_id)
end