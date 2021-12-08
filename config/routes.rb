Rails.application.routes.draw do

  get 'static_pages/entrainement'
  get 'static_pages/exercice1'
  get 'static_pages/exercice2'
  root to: "static_pages#index"
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
