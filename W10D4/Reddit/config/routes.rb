Rails.application.routes.draw do
  resources :posts, only: [:new, :show, :create, :destroy, :update, :edit] do  
    resources :comments, only: [:new]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :subs 
  resources :comments, only: [:create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
