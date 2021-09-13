class UsersController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json:user
    end 

    # def destroy
    #     user = User.find_by(id: params[:id])
    #     user.destroy
    # end

    private

    def user_params
        params.permit(:username, :password)
    end 
end
