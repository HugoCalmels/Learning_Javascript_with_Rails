Rails.application.routes.draw do

  get 'static_pages/dom_train'
  get 'static_pages/dom_ex_1'
  get 'static_pages/dom_ex_2'
  
  get 'static_pages/extra_notes'

  get 'static_pages/event_train'
  get 'static_pages/event_ex_1'
  get 'static_pages/event_ex_2'

  get 'static_pages/js_30_02'

  root to: "static_pages#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
