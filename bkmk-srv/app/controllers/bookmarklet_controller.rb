class BookmarkletController < ApplicationController
  layout nil
  def get_remote
    render "#{params[:name]}-remote.js"
  end
  
  def get_local
    render "#{params[:name]}-local.txt"
  end
end
