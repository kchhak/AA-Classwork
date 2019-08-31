class SessionsController < ApplicationController
  def new 
    render :new
  end

  def create 
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      log_in(user)
      redirect_to bands_url
    else
      flash.now[:errors] = ["Invalid login credentials"]
      render :new
    end
  end

  def destroy 
    log_out
    flash[:success] = ["Logged out! See you soon!"]
    redirect_to new_session_url
  end 
  
end