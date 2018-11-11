Rails.application.routes.draw do
  root 'normals#home'
  get 'find', to: 'normals#find'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
