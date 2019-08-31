class TracksController < ApplicationController
  before_action :require_user

  def new
    @track = Track.new
    @albums = Album.all
  end

  def create
    @albums = Album.all
    @track = Track.new(track_params)
    if @track.save 
      flash[:success] = ["Track saved"]
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      render :new
    end
  end

  def edit
    @albums = Album.all
    @track = Track.find(params[:id])
  end

  def update 
    @albums = Album.all
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      render :edit
    end
  end

  def show 
    @track = Track.find(params[:id])
  end

  def destroy
    track = Track.find(params[:id])
    album = track.album
    track.destroy!
    redirect_to album_url(album)
  end

  private
  def track_params
    params.require(:track).permit(:album_id, :title, :ord, :lyrics, :track_type)
  end
end