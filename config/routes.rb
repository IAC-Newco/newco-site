Rails.application.routes.draw do
  root to: 'home_page#index'

  match "*path", to: 'home_page#index', format: false, via: [:get, :post, :put, :delete]
end
