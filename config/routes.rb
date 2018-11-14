Rails.application.routes.draw do
  get 'colors/red', to: 'colors#red'
  get 'colors/blue', to: 'colors#blue'
  get 'colors/green', to: 'colors#green'
  root 'normals#home'
  get 'find', to: 'normals#find'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
