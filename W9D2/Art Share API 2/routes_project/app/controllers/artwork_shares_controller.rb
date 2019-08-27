class ArtworkSharesController < ApplicationController
  def create
      artwork_shares = ArtworkShare.new(artwork_shares_params)
    
      if artwork_shares.save
        render json: artwork_shares
      else
        render json: artwork_shares.errors.full_messages, status: :unprocessable_entity
      end
  end
  
  def destroy 
      artwork_shares = ArtworkShare.find(params[:id])
      artwork_shares.destroy
      render json: artwork_shares
  end
end

private

def artwork_shares_params
  params.require(:artwork_shares).permit(:artwork_id , :viewer_id)
end