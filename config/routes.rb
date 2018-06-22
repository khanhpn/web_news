Rails.application.routes.draw do
  root 'pages#index'
  resources :categories do
    resources :articles
  end
  resources :articles do
    collection do
      get "top_article/:id" , to: "articles#top_article"
      get "newest_articles" , to: "articles#newest_articles"
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
