class UsersController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end 
    
    def show
        render json: @current_user, status: :accepted 
    end
      

    # def destroy
    #     user = User.find_by(id: params[:id])
    #     user.destroy
    # end

    private

    def user_params
        params.permit(:username, :password, :profile_picture, :bio)
    end 
end
