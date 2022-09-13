Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'home_page#index'

  match "*path", to: 'home_page#index', format: false, via: [:get, :post, :put, :delete]
end
