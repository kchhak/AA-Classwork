class AlbumsController < ApplicationController
  before_action :require_user

  def new 
    @bands = Band.all
    @album = Album.new
  end

  def create
    @bands = Band.all

    @album = Album.new(album_params)
    if @album.save
      flash[:success] = ["Cool, we've added it to our library!"]
      redirect_to album_url(@album)
    else 
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def edit
    @bands = Band.all
    @album = Album.find(params[:id])
    render :edit
  end

  def update 
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      flash[:success] = "Album updated! Thanks for your help"
      redirect_to album_url(@album)
    else
      flash.now[:errors]
      render :edit
    end
  end

  def destroy 
    album = Album.find(params[:id])
    band = album.band
    album.destroy!
    redirect_to band_url(band)
  end


  private
  def album_params
    params.require(:album).permit(:band_id, :title, :year, :album_type)
  end
  
end