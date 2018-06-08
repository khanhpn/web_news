Rails.application.routes.draw do
  root 'pages#index'
  resources :categories do
    resources :articles
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
