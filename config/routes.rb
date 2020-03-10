Rails.application.routes.draw do
  resources :invoices
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'invoices#index'
end
