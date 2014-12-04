Rails.application.routes.draw do
  
  get '/', to: 'groups#index', as: :landing_page
  
  match "/auth/:provider/callback", to: "sessions#create", via: [:get, :post]
  match "/signout" => "sessions#destroy", :as => :signout, via: [:get, :post]
end
