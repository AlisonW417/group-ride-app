Rails.application.routes.draw do
  resources :signups
  resources :rides
  resources :users
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#detroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
